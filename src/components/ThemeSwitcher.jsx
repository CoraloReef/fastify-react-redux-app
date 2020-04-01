import React from 'react';
import { connect } from 'react-redux';

import { actions } from '../slices';

const mapStateToProps = (state) => {
  const { currentTheme } = state;
  return { currentThemeName: currentTheme.name };
};

const actionCreators = {
  changeCurrentTheme: actions.changeCurrentTheme,
};

const ThemeSwitcher = (props) => {
  const changeTheme = (name) => () => {
    const { changeCurrentTheme } = props;
    changeCurrentTheme({ name });
  };

  const { currentThemeName } = props;

  return (
    <div>
      <h4>{currentThemeName}</h4>
      <div>
        <button className="btn btn-light mx-2" onClick={changeTheme('light')}>Light</button>
        <button className="btn btn-dark mx-2" onClick={changeTheme('dark')}>Dark</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(ThemeSwitcher);
