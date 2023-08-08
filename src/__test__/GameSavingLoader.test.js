import GameSavingLoader from "../js/GameSavingLoader";

test('check GameSavingLoader', async () => {
      expect.assertions(1);
      const saving = await GameSavingLoader.load();
      const expected = JSON.parse(saving);
      expect(expected).toEqual({"created":1546300800,"id":9,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
  })
