import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem/sidebarItem';

class SidebarComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null,
        };
    }
    render(){
        const{ notes, classes, selectedNoteIndex} = this.props;

        return(
            <div className={classes.SidebarContainer}>
                <Button
                    onClick={this.newNoteBtnClick}
                    className={classes.newNoteBtn}>
                        {this.state.addingNote ? 'Cancel' : 'New Note'}
                </Button>
                {
                    this.state.addingNote ? 
                    <div>
                        <input type="text" className={classes.newNoteInput}
                        placeholder='Enter note title'
                        onKeyUp={(e) => this.updateTitle(e.target.value)}>
                        </input>
                        <Button 
                        className={classes.newNoteSubmitBtn}
                        onClick={this.newNote}>
                            Submit Note
                        </Button>
                    </div> :
                    null
                }
            </div>
        );
    }
    newNoteBtnClick = () => {
        this.setState({
            title: null,//makes note reset if closed 
            addingNote: !this.state.addingNote 
        });
        console.log('newbtn clicked');
    }
    updateTitle = (txt) => {
        this.setState({title: txt});
        console.log('Here', txt);
    }
    newNote = () => {
        console.log(this.state);
    }
}


export default withStyles(styles)(SidebarComponent);