const stateDefault = {
  options: [
    { ma: 'keo', hinhAnh: './img/keo.png', chosen: false },
    { ma: 'bua', hinhAnh: './img/bua.png', chosen: false },
    { ma: 'bao', hinhAnh: './img/bao.png', chosen: true },
  ],
  result: "I'm Iron Man, I love you 3000!!",
  win: 0,
  lose: 0,
  matches: 0,
  opponent: { ma: 'keo', hinhAnh: './img/keo.png', chosen: true },
};

const RpsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHOSE_OPTIONS': {
      let updateOpt = [...state.options];
      updateOpt = updateOpt.map((item, index) => {
        if (item.ma === action.ma) {
          return { ...item, chosen: true };
        }
        return { ...item, chosen: false };
      });

      state.options = updateOpt;
      return { ...state };
    }
    case 'PLAY_RANDOM': {
      let randomNumber = Math.floor(Math.random() * 3);
      let randomChosen = state.options[randomNumber];
      state.opponent = randomChosen;
      return { ...state };
    }
    case 'END_GAME': {
        state.matches ++;

      let player = { ...state.options.find((item) => item.chosen === true) };
      let computer = state.opponent;
      switch (player.ma) {
        case 'keo':
          if (computer.ma === 'keo') {
            state.result = 'DRAW!';
          } else if (computer.ma === 'bua') {
            state.result = 'LOSE';
          } else {
            state.result = 'WIN';
            state.win ++;
          }
          break;
        case 'bua':
          if (computer.ma === 'keo') {
            state.result = 'WIN';
            state.win ++;
          } else if (computer.ma === 'bua') {
            state.result = 'DRAW';
          } else {
            state.result = 'LOSE';
          }
          break;
        case 'bao':
          if (computer.ma === 'keo') {
            state.result = 'LOSE';
          } else if (computer.ma === 'bua') {
            state.result = 'WIN';
            state.win ++;
          } else {
            state.result = 'DRAW';
          }
          break;
        default:
          state.result = "I'm Iron Man, I love you 3000!!";
          break;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default RpsReducer;
