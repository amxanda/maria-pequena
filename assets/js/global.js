let nav = document.querySelector('#menu');
let animation = document.querySelector('.animated');
let blur = document.querySelector('#blur');

animation.onclick = () => {
    nav.classList.toggle('open');
    animation.classList.toggle('active');
} ;

blur.onclick = () => {
    nav.classList.toggle('open');
};

const app = {
    i:'.@#*(S%&){+}?[123456789]',
    s: function (e) {
        let ne = document.querySelector(this.i[0] + e);
        if (! ne) {
            ne = document.querySelector(this.i[2] + e);
        }

        return ne;
    }
}

window.onscroll = function (e) {
    document.body.classList.toggle('ws', window.scrollY > 0);

    let scroll = app.s('scroll');
    scroll.classList.toggle('swe', window.scrollY > 380);

    scroll.onclick = function () {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
}

var mnb = app.s('mobile-menu');
var ni = [
    {title: 'Início', link:'index.html'},
    {title: 'Sobre nós', link:'about-us.html'},
    {title: 'Galeria', link:'gallery.html'},
    {title: 'Contato', link:'contact.html'},
    {title: 'Apoie e Participe', link:'join-us.html'}
]

