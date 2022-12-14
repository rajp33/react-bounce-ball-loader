import React from "react";
import { BounceBallLoader } from "./BounceBallLoader";
import Basketball from './basketball.svg';

export default {
    component: BounceBallLoader
};

export const Default = () => <BounceBallLoader />

export const Basketballs = () => <BounceBallLoader balls={[
    {
        background: `url(${Basketball})`,
        easeDelay: 0
    },
    {
        background: `url(${Basketball})`,
        easeDelay: .15
    },
    {
        background: `url(${Basketball})`,
        easeDelay: .25
    },
    {
        background: `url(${Basketball})`,
        easeDelay: .35
    }
]} />