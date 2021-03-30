import React from "react";
import {connect} from "react-redux";
import MenuItem from "../menu-item/menuItem";
import "./home.css";
import {Container} from "@material-ui/core";

class Home extends React.Component {

    render() {
        const {menu} = this.props;
        const arrayObj = Object.entries(menu).map(arr => arr[1]);

        return (
            <>
                <div className={"greeting"}>
                    <div className={"greeting_box"}>
                        <span>КУПИТЬ АКЦИИ</span>
                        <p>ВЕДУЩИХ НЕФТЯНЫХ<br/>КОМПАНИЙ РОССИИ</p>
                        <span>ЛЕГКО</span>
                    </div>
                </div>
                    <ul>
                        {
                            arrayObj.map(menuItem => {
                                return <MenuItem key={menuItem.id} menuItem={menuItem}/>;
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