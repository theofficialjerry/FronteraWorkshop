'use client'
import {useAlert} from "@/app/components/utils/AlertContext";
import axios from "axios";
import React, {useState} from "react";

function SearchBar(props) {
    const [inputValue, setInputValue] = useState(''); // Initialize the input value state
    const {showAlert, hideAlert} = useAlert();

    //For the dropdown
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Rare Holo GX");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    // Search bar behaviour

    const handleButtonClick = () => {
        // Make an API request using Axios
        axios.get(`/api/cards/?name=${inputValue}&rarity=${selectedOption}`)
            .then((response) => {
                // On success, emit the data to the parent
                props.onEventEmitted(response.data);
            })
            .catch((error) => {
                showAlert('Error', 'Pokemon does not exist');
                console.error('API request failed:', error);
            });
        // props.onEventEmitted(inputValue);

    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            // If the Enter key is pressed, submit the form (or trigger the action)
            handleButtonClick();
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the 'inputValue' state when the input changes
    };


    function Option(props) {
        const handleRarityOptionChange = (event) => {
            setSelectedOption(event.target.value); // Update the 'inputValue' state when the input changes
            setIsOpen(false); // Close the dropdown when an option is selected
        }

        return (<div>
            <input
                type="radio"
                name="RarityOption"
                value={props.children}
                id={props.children.split(' ').join('')}
                className="peer hidden"
                onChange={handleRarityOptionChange}
                checked={selectedOption === props.children}
            />

            <label
                htmlFor={props.children.split(' ').join('')}
                className="flex cursor-pointer items-center justify-center border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:bg-gray-320 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white"
            >
                <p className="text-sm font-medium">{props.children}</p>
            </label>
        </div>)
    }

    return (<div className={props.className}>
        <div className="relative flex flex-row-reverse items-start">
            <div className="inline-block">
                <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center overflow-hidden border rounded-md bg-white mb-1 p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                    <span className="sr-only">Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && (<fieldset className="space-y-0">
                    <legend className="sr-only">Delivery</legend>
                    <Option>Rare Holo GX</Option>
                    <Option>Rare Holo EX</Option>
                    <Option>Rare Holo Star</Option>
                    <Option>Rare Holo V</Option>
                    <Option>Rare Holo VMax</Option>
                    <Option>Rare Rainbow</Option>
                    <Option>Rare Shiny GX</Option>
                </fieldset>)}
            </div>
            <div className="relative">

                <label htmlFor="Search" className="sr-only"> Search </label>
                <input
                    type="text"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    value={inputValue}
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">    <button type="button"
                                                                                                      className="text-gray-600 hover:text-gray-700"
                                                                                                      onClick={handleButtonClick}>
    <span className="sr-only">Search</span>

      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
    </span>
            </div>
        </div>
    </div>)
}

export default SearchBar;