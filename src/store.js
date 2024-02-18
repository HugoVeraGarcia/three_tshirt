import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: [
    '#ccc',
    '#EFBD4E',
    '#80C670',
    '#726DE8',
    '#EF674E',
    '#353934',
    'cyan'
  ],
  // decals: ['react', 'three2', 'pmndrs', 'hugo_malo1', 'la_raza'],
  decals: ['hugo_malo1', 'la_raza', 'german', 'el_senior', 'jesus', 'bertha','clandestino'],
  selectedColor: '#EFBD4E',
  selectedDecal: 'hugo_malo1'
})

export { state }
