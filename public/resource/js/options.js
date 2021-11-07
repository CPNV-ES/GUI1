const view = {
	DAY: 'day',
	WEEK: 'week'
}

const week = {
	WORK: 5,
	FULL: 7
}

export { view, week };
import { updateCalendarWeek } from "./calendar.js";

if (localStorage.getItem('viewMode') === null) {
	localStorage.viewMode = view.DAY;
}
if (localStorage.getItem('weekSize') === null) {
	localStorage.weekSize = week.WORK;
}

$.get('modals/options.html', function(data) {
	let modal = $(data);

	// Check the stored options
	modal.find('#view-mode-' + localStorage.viewMode).prop("checked", true);
	modal.find('#week-size-' + localStorage.weekSize).prop("checked", true);

	// Events
	modal.find('.view-mode-radio').change(function () {
		switch (this.value) {
			case 'day': {
				localStorage.viewMode = view.DAY;
				break;
			}
			case 'week': {
				localStorage.viewMode = view.WEEK;
				break;
			}
		}
		updateCalendarWeek();
	})
	modal.find('.week-size-radio').change(function () {
		switch (this.value) {
			case 'work': {
				localStorage.weekSize = week.WORK;
				break;
			}
			case 'full': {
				localStorage.weekSize = week.FULL;
				break;
			}
		}
		updateCalendarWeek();
	})

	modal.find('#modal-background').click(function () {
		close();
	})	
	modal.find('#btn-close').click(function () {
		close();
	})

	$('#modal-options').append(modal);
});

// Events
$('#options-btn').click(function () {
	$('#modal-options').removeClass('hidden');
})

function close () {
	$('#modal-options').addClass('hidden');
}