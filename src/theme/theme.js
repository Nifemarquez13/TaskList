import { extendTheme } from '@chakra-ui/react'

const Link = {
    variants: {
        menu:{
            px:'2',
            py:'1',
            rounded:'md',
            _hover:{
              textDecoration: 'underline',
              bg: "plum",
            }
        }
    }
};

const Button = {
variants: {
        outline:{
                bg: "rgb(66, 66, 233)",
                ml: "5px",
                color: "white",
                border: "2px",
                p: "10px 20px",
                fontSize: "14px",
                borderRadius: "5px",
                _hover:{
                color:'black',
                bg:"rgb(220, 116, 224)",
                fontWeigth:'light',
            }
              
        }
    }
};

const FontFamily={
    heading: 'sans-serif',
    body:'sans-serif',
    button:'Lobster, Pacifico'
}

export const theme = extendTheme({ components: {Link, Button}, FontFamily});
