import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    JSON.parse(saving);
  } catch (error) {
    console.log(error.message);
  }
})();
