if (
  localStorage.theme === 'dark' ||
  (!'theme' in localStorage &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', 'dark');
} else if (localStorage.theme === 'dark') {
  document.querySelector('html').classList.add('dark');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', 'dark');
}

document.getElementById('switchTheme').addEventListener('click', function () {
  let htmlClasses = document.querySelector('html').classList;
  if (localStorage.theme == 'dark') {
    htmlClasses.remove('dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', 'light');
    localStorage.removeItem('theme');
  } else {
    htmlClasses.add('dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', 'dark');
    localStorage.theme = 'dark';
  }
});
