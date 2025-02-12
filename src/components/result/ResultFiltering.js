import React, { useState } from 'react';
import Select from 'react-select';

function ResultFiltering() {

    const options = [
        { value: 'recent', label: '최신순' },
        { value: 'low-price', label: '낮은 가격순' },
        { value: 'high-price', label: '높은 가격순' }
    ];

    const eachOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' }
    ];

    const [select, setSelect] = useState(options[0]);
    const [ea, setEa] = useState(eachOptions[0]);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            minHeight: '25px',
            height: '25px',
        }),
        valueContainer: (provided) => ({
            ...provided,
            height: '25px',
            padding: '0 4px',
        }),
        input: (provided) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            height: '25px',
            padding: '0 4px',
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '11px',
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '11px',
        }),
        menu: (provided) => ({
            ...provided,
            fontSize: '11px',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0px',
            fontSize: '11px',
        }),
        clearIndicator: (provided) => ({
            ...provided,
            padding: '0px',
            fontSize: '10px',
        }),
    };

    return (
        <>
            <div className="result-filtering">
                <div className="result-filtering-each">
                    <p>매수&nbsp;</p>
                    <Select options={eachOptions} value={ea} onChange={setEa} styles={customStyles} />
                </div>
                <div className="result-filtering-select">
                    <Select options={options} value={select} onChange={setSelect} styles={customStyles} />
                </div>
                <div className="result-filtering-deck">
                    <input className="result-deck-select" type="checkbox" id="deck" name="deck" value="deck" />
                    <p>
                        묶어팔기 제외
                    </p>
                </div>
            </div>
        </>
    );
}

export default ResultFiltering;