import React, { useEffect } from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";


import {
    selectRandomNumbers,
    selectRandomOffsets
} from "./states/states";

import {
    getRandomNumbers,
    getRandomOffsets
} from "./actions/action";

import {
    LayoutStyle,
    GaugeStyle
} from './styles/Style';

import withGauge, { HeartBeat, Needle } from 'react-ui-gauge-component';


const DashboardExample = () => {
    const timeInteval = 1500;
    const dispatch = useDispatch();
    const randomNumbers = useSelector(selectRandomNumbers);
    const randomOffsets = useSelector(selectRandomOffsets);
    const defaultTitleColor = "white";
    const defaultValueColor = "white";
    useEffect(() => {
        setInterval(
          ()=> {
           dispatch(getRandomNumbers());
           dispatch(getRandomOffsets());
          }, timeInteval);
      },[]);
    
    let data =  [randomNumbers[0] - randomOffsets[0]];
    const Gauge1 = withGauge({
        WrappedComponent: Needle({value:data[0], min: 0, max: 100}),
        fields: [{title: "Label 1", value: data[0], titleColor: defaultTitleColor, valueColor: data[0] > 0 ? defaultValueColor : "red" }]
    });
    
    data =  [randomNumbers[0] - randomOffsets[1], 
            randomNumbers[1] - randomOffsets[1]];
    const Gauge2 = withGauge({
        WrappedComponent: Needle,
        fields: [
            {title: "Label 1", value: data[0], titleColor: defaultTitleColor, valueColor: data[0] > 0 ? defaultValueColor : "red"},
            {title: "Label 2", value: data[1], titleColor: defaultTitleColor, valueColor: data[1] > 0 ? defaultValueColor : "red"}]
    });
    
    data = [randomNumbers[0] - randomOffsets[2], 
            randomNumbers[1] - randomOffsets[2], 
            randomNumbers[2] - randomOffsets[2]];
    const Gauge3 = withGauge({
        WrappedComponent: HeartBeat,
        fields: [
            {title: "Label 1", value: data[0], titleColor: defaultTitleColor, valueColor: data[0] > 0 ? defaultValueColor : "red"},
            {title: "Label 2", value: data[1], titleColor: defaultTitleColor, valueColor: data[1] > 0 ? defaultValueColor : "red"},
            {title: "Label 3", value: data[2], titleColor: defaultTitleColor, valueColor: data[2] > 0 ? defaultValueColor : "red"}]
    });
    
    data = [randomNumbers[0] - randomOffsets[3], 
            randomNumbers[1] - randomOffsets[3], 
            randomNumbers[2] - randomOffsets[3], 
            randomNumbers[3] - randomOffsets[3]];
    const Gauge4 = withGauge({
        WrappedComponent: HeartBeat,
        fields: [
            {title: "Label 1", value: data[0], titleColor: defaultTitleColor, valueColor: data[0] > 0 ? defaultValueColor : "red"},
            {title: "Label 2", value: data[1], titleColor: defaultTitleColor, valueColor: data[1] > 0 ? defaultValueColor : "red"},
            {title: "Label 3", value: data[2], titleColor: defaultTitleColor, valueColor: data[2] > 0 ? defaultValueColor : "red"},
            {title: "Label 4", value: data[3], titleColor: defaultTitleColor, valueColor: data[3] > 0 ? defaultValueColor : "red"}]
    });

    return (
        <LayoutStyle className='together' variant='main'>
        <GaugeStyle className='leftTop' variant='leftTop'>
          <Gauge1/>
        </GaugeStyle>
        <GaugeStyle className='leftBottom' variant='leftBottom'>
          <Gauge2/>
        </GaugeStyle>
        <GaugeStyle className='rightTop' variant='rightTop'>
          <Gauge3/>
        </GaugeStyle>
        <GaugeStyle className='rightBottom' variant='rightBottom'>
          <Gauge4/>
        </GaugeStyle>
      </LayoutStyle>
    )
}

export default DashboardExample;
