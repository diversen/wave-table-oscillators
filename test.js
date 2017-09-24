const {
    getInstrumentNames, 
    getAllPeriodicWaves, 
    getAllWaveOscillators, 
    getPeriodicWave, getWaveOscillator} = require('./index')

var ctx = new (window.AudioContext || window.webkitAudioContext)();

// All instrument names
let ins = getInstrumentNames();
console.log(ins)

// All periodicWaves
let waves = getAllPeriodicWaves(ctx)
console.log(waves)

// All waveOscilattors
let oscs = getAllWaveOscillators(ctx);
console.log(oscs)

// Single periodicWave
let wave = getPeriodicWave(ctx, 'Bass')
console.log(wave)

// Single waveOscilattors
let osc = getWaveOscillator(ctx, 'Bass')
console.log(osc)

osc.frequency.value = 220

osc.start(0);
osc.stop(1)

osc.connect(ctx.destination);
