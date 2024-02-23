import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import GenerateColor from "../random-color-gen";
import SingleMultiSelection from "../multi-selection";
import NestedNav from "../nested-nav";
import { menus } from "../nested-nav/data";
import MutliTabs from "../multi-tabs";


export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />,
        },
        {
            key: "showRandomColorGenerator",
            component: <GenerateColor />,
        },
        {
            key: "showAccordion",
            component: <SingleMultiSelection />,
        },
        {
            key: "showNestedNav",
            component: <NestedNav navList={menus} />,
        },
        {
            key: 'showTabs',
            component: <MutliTabs />
        }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <h1>Loading data ! Please wait</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key) ? componentItem.component : null
            )}
        </div>
    );
}