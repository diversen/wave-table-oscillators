var instruments = require('@mohayonao/wave-tables');

function getPeriodicWave(ctx, name) {
    var instrument_obj = instruments[name]
    var wave = ctx.createPeriodicWave(
        Float32Array.from(instrument_obj.real),
        Float32Array.from(instrument_obj.imag)
    );
    return wave;
}

function getInstrumentNames() {
    return Object.keys(instruments);
}

function getAllPeriodicWaves(ctx) {
    let instrument_names = getInstrumentNames();
    let periodic_waves = []
    instrument_names.forEach(function (name) {
        periodic_waves[name] = getPeriodicWave(ctx, name);
    });
    return periodic_waves;
}

function getWaveOscillator(ctx, name) {

    let oscillator = ctx.createOscillator();
    let wave = getPeriodicWave(ctx, name)
    oscillator.setPeriodicWave(wave);
    return oscillator;
}

function getAllWaveOscillators(ctx) {
    let instrument_names = getInstrumentNames();
    let oscillators = []
    instrument_names.forEach(function (name) {
        oscillators[name] = getWaveOscillator(ctx, name);
    });
    return oscillators;
}

module.exports.getInstrumentNames = getInstrumentNames;
module.exports.getAllPeriodicWaves = getAllPeriodicWaves;
module.exports.getAllWaveOscillators = getAllWaveOscillators;
module.exports.getPeriodicWave = getPeriodicWave;
module.exports.getWaveOscillator = getWaveOscillator;
