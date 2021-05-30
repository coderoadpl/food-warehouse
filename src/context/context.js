import React, {useEffect, useState} from 'react';
import {db} from "../firebase/firebaseConfig";
import English from "../languages/en";
import Polish from "../languages/pl";
import {ThemeProvider} from "styled-components";
import {lightTheme, nightTheme} from '../theme/theme'
import {IntlProvider} from "react-intl";
import GlobalStyle from "../theme/GlobalStyle";
import {firebase} from "../firebase/firebaseApi";
import {EN_language, PL_language} from "../utills/language";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [foodList, setFoodList] = useState([]);
    const [theme, setTheme] = useState(lightTheme);
    const [language, setLanguage] = useState(EN_language);

    function changeLanguage(language) {
        // setLocale(language);
        switch (language) {
            case('en'):
                setLanguage(EN_language);
                break;
            default:
                setLanguage(PL_language);
        }
    }

    const toggleTheme = (e) => {
        e.target.value === 'on' ? setTheme(nightTheme) : setTheme(lightTheme)
    };

    const handleLanguageChange = e => {
        changeLanguage(e.target.value);
    };

    useEffect(() => {
       const unSubscribe =  db.collection("foodList").onSnapshot(
            (snapshot) => {
                const foodListData = [];
                snapshot.forEach(doc => foodListData.push({...doc.data(), id: doc.id}));
                // const foodListData = snapshot.map(doc => ({id: doc.id, ...doc.data()}
                setFoodList(foodListData)
            }
        );
        return unSubscribe;
    }, []);


    const increaseQuantity = (item) => {
        firebase.increaseQuantity(item);
    };

    const decreaseQuantity = (item) => {
        firebase.decreaseQuantity(item);
    };

    const deleteItem = id => {
        firebase.deleteItem(id);
    };

    const addItem = (newItem) => {
        firebase.addItem(newItem);
    };

    const editItem = (item) => {
        firebase.editItem(item);
    };

    const context = {
        foodList,
        language,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        addItem,
        editItem,
        toggleTheme,
        handleLanguageChange
    }

    return (
        <AppContext.Provider value={context}>
            <IntlProvider locale={language.locale} messages={language.lang}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle backgroundColor={lightTheme.backgroundColor}/>
                    {children}
                </ThemeProvider>
            </IntlProvider>
        </AppContext.Provider>
    )
}


export default AppProvider;