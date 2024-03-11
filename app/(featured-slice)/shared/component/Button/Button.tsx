import React from 'react';
import {Button as ButtonUI} from "@chakra-ui/button";
import {ButtonProps} from "@chakra-ui/react";

export const Button = ({...props}: ButtonProps) => {
    return (
        <ButtonUI
            {...props}>
        </ButtonUI>
    );
};

