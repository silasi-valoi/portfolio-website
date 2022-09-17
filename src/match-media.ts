import React from "react";

export  function  MatChMediaHOC(BaseComponent:any, mediaQuery:string) {

    return class MatChMedia extends React.Component {
        constructor(props:any){
            super(props)
        } 
        public mql = window.matchMedia(mediaQuery);

        readonly state = {
            show:false,

        }

        componentWillUnmount= () => {
            this.mql.removeEventListener('onchange', this.isMatch)

        }

        componentDidMount = () => {
            
            this.mql.onchange = (e) => {
                this.isMatch(e)
            }

            this.isMatch(this.mql)
        }

        isMatch = (mql:any)=> {
            let show = this.state.show;

            if (mql.matches) {
                show = true
                                      
            }else {
                show = false
            }
            
            this.setState({show})
           
        }

        render() {
            if (!this.state.show) {
                return null;
            }

            return  React.createElement(BaseComponent, this.props);
            
        }

    } 
    
} 

export default MatChMediaHOC;