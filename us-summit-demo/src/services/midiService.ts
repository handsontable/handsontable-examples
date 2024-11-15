type ThemeCallback = (padId: string) => void;

export const initMIDI = (onThemeChange: ThemeCallback): void => {
  navigator.requestMIDIAccess()
    .then((midiAccess) => {
      const inputs = midiAccess.inputs;

      if (inputs.size > 0) {
        const input = inputs.values().next().value;

        if (!input) return;

        input.onmidimessage = (message) => handleMIDIMessage(message, onThemeChange);

        console.log('MIDI Device Connected');
      } else {
        console.log('No MIDI device detected. Please connect a MIDI device.');
      }
    })
    .catch((err) => {
      console.error('Failed to access MIDI devices:', err);
    });
};

const handleMIDIMessage = (message: WebMidi.MIDIMessageEvent, onThemeChange: ThemeCallback): void => {
  const [, padNumber, padValue] = message.data;

  if (padValue > 0) {
    console.log(padNumber);

    onThemeChange(String(padNumber));
  }
};