import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {networkLocalStorageKey} from "./config";
import {Config} from "./types";

interface Props {
    networkConfig: Config;
    mb: string;
}

const NetworkCard: React.FC<Props> = ({networkConfig, mb}) => {
    const {title, icon: Icon, disabled, active} = networkConfig;
    const variant = active ? "primary" : "tertiary";
    const textColor = active ? "success" : "primary";
    return (
        <Button
            disabled={disabled}

            variant={variant}
            onClick={() => {
                window.localStorage.setItem(networkLocalStorageKey, networkConfig.connectorId);
            }}
            style={{justifyContent: "space-between", width: "min-content", display: "inline-block"}}
            mb={"8px"}
            mr={"5px"}
            id={`wallet-connect-${title.toLocaleLowerCase()}`}
        >
            <Text bold color={textColor}>
                {title}
            </Text>
        </Button>
    );
};

export default NetworkCard;
