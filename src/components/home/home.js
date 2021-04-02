import React from "react";
import {connect} from "react-redux";
import MenuItem from "../menu-item/menuItem";
import "./home.css";
import Box from '@material-ui/core/Box';

class Home extends React.Component {

    render() {
        const {menu} = this.props;
        const arrayObj = Object.entries(menu).map(arr => arr[1]);

        return (
            <>
                <div className={"greeting"}>
                    <Box className={"greeting_box"}>
                        <span>КУПИТЬ АКЦИИ</span>
                        <p>ВЕДУЩИХ НЕФТЯНЫХ<br/>КОМПАНИЙ РОССИИ</p>
                        <span>ЛЕГКО</span>
                    </Box>
                </div>
                    <ul>
                        {
                            arrayObj.map(menuItem => {
                                return <MenuItem
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                />;
                            })
                        }
                    </ul>
            </>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
    };
};

export default connect(mapStateToProps)(Home);