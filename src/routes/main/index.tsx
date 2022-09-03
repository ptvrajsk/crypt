import React from "react";
import AppTitle from '../../shared/app_title/index';
import AppLogo from "../../shared/app_logo";
import AppButton from "../../shared/app_button";
import './component_main.scss';


export default function ComponentMain() {
  return (
    <div>
      <AppTitle className="title"/>
      <AppLogo className="app_logo"/>
      <AppButton className="dark_generic_button" text="Get Started"/>
    </div>
  );
}