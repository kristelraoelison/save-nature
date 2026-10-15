const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    //deleteSpeed: 20
})

.typeString('Préservons la richesse')
.pauseFor(300)
.typeString('<strong> naturelle de Madagascar</strong>')
.start()
