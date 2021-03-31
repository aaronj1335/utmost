(function() {
  const q = s => document.querySelector(s);
  const qa = s => [].slice.call(document.querySelectorAll(s));
  q('.devo-body').style = `
    background-image: none;
    background-color: #000;
  `;
  q('body').style = `background-color: #000;`;
  q('#page-body').style = `padding-top: 0`;
  qa('.post-content p').forEach(e => e.style = 'color: #aaa');
  q('.utmost-view').style = `background-color: #000;`;
  q('.utmost-home-banner').remove();
  q('.navbar').remove();
  q('figure').remove();
  qa('a[href]')
    .filter(a => a.href.indexOf('biblegateway') >= 0)
    .forEach(a => {
      a.href = `https://en.everywherebible.org/${
        new URL(a.href).searchParams.get('search')
          .replace(/ /g, '+')}`;
    });
})()
