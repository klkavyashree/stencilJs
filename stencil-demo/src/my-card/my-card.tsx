import { Component, h, Prop, State, Listen } from '@stencil/core';


@Component({
    tag: 'my-card',
    styleUrl: 'my-card.css',

    // it will reduce the conflicts like if stencil comp and 
    // outside comp have same style, stencil style will override;
    shadow: true,

    // it will add some additional attributes;
    // scoped: true,
})
export class MyCard {
    // mutable true means we may change the prop value inside this comp
    // prop to get data from outside
    @Prop({mutable: true}) userName: string;

    // state will rerender the render part
    // create normal variable if u don't want to rerender component
    @State() APIData: string = "API Data";
    @State() showReactTab = false;
    @State() showStencilTab = false;
    @State() reactUsers = "";
    @State() stencilUsers = "";

        // // component added to DOM or render on DOM
        // connectedCallback() {
        //     console.log("connectedCallback");
            
        // }
        // // component deleted from DOM or removed from DOM
        // disconnectedCallback() {
        //     console.log("disconnectedCallback");
            
        // }

        // // load only once and good place to load data asynchronously
        // componentWillLoad() {
        //     console.log("componentWillLoad");
            
        // }

        // // recommended to make state update
        // componentWillRender() {
        //     console.log("componentWillRender");
        //     this.APIData = "update api data";
        // }

        // // called once after component is loadedfully on DOM and 
        // // first render() occurs
        // // not make state update or else it will call willRender update willUpdate again;
        // componentDidLoad() {
        //     console.log("componentDidLoad");        
        // }

        // // called on state or prop change and render is about to request;
        // componentShouldUpdate() {
        //     console.log("componentShouldUpdate");
        //     return true;
        // }

        // // this will call on rerender
        // componentWillUpdate() {
        //     console.log("componentWillUpdate");
            
        // }

        // componentDidUpdate() {
        //     console.log("componentDidUpdate");
            
        // }


        // // // this will call on rerender
        // // componentWillUpdate(){
        // //     console.log("update");
            
        // // }

        // @Watch('userName')
        // watchHandler(newValue, oldValue){
        //     console.log(newValue, oldValue);   
        // }

        // // changeStates(){
        // //     this.userName = "Updated";
        // //     // this.APIData = "update api data";
        // // }

    componentWillLoad() {
           this.APIData = "loading";
           fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
           .then(res => {
               return res.json();
           }) 
           .then(parsedRes => {
               var metaData = parsedRes['Meta Data'];
               var timeDateStencil = metaData['1. Information'];
               this.APIData = timeDateStencil;
           })
           .catch(err => console.log(err));
    }

    getStencilUsers(){
        this.stencilUsers = "loading";
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
        .then(res => {
            return res.json();
        }) 
        .then(parsedRes => {
            var metaData = parsedRes['Meta Data'];
            var timeDateStencil = metaData['1. Information'];
            this.stencilUsers = timeDateStencil;
        })
        .catch(err => console.log(err));
    }

    getReactUser(){
        this.reactUsers = "loading";
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
        .then(res => {
            return res.json();
        }) 
        .then(parsedRes => {
            var metaData = parsedRes['Meta Data'];
            var timeDateStencil = metaData['5. Output Size'];
            this.reactUsers = timeDateStencil;
        })
        .catch(err => console.log(err));
    }

    fetchDataFromApi(content){
        if(content === "stencil"){
            this.getStencilUsers();
        }else{
            this.getReactUser();
        }
    }

    @Listen('selectOfTab', {target: 'body'})
    selectionHandler(event){
        this.userName = event.detail;
    }

    onContentChange(content){
        if(content === "reactTab"){
            this.showReactTab = true;
            this.showStencilTab = false; 
        }else if(content === "stencilTab"){
            this.showStencilTab = true;
            this.showReactTab = false;
        }
        else{
            this.showReactTab = false;
            this.showStencilTab = false;
        }
    }

    onInputChange(event: Event){
        this.userName = (event.target as HTMLInputElement).value;
    }

    render() {
        let reactContent =  <div class="card">
            <h2>This is react Content</h2>
            <span>{this.reactUsers}</span>
            <br />
            <button class="react-button" onClick={this.fetchDataFromApi.bind(this, "react")}>Get react users</button>
        </div>


        let stencilContent = <div class="card">
            <h2>This is stencil content</h2>
            <span>{this.stencilUsers}</span>
            <br />
            <button class="stencil-button" onClick={this.fetchDataFromApi.bind(this, "stencil")}>Get stencil users</button>
        </div>

        let contentToDisplay = ""
        if (this.showReactTab) {
            contentToDisplay = reactContent;
        }else if(this.showStencilTab) {
            contentToDisplay = stencilContent;
        }

        let mainContent = 
        <div class="card">
            <h2>Hi I am {this.userName} </h2>

            <h5>{this.APIData}</h5>

            {/* <div>
                <button class="stencil-button" onClick={this.changeStates.bind(this)}>Update Name</button>
            </div> */}

            <button class="react-button" onClick={this.onContentChange.bind(this, "reactTab")}>React</button>
            <button class="stencil-button" onClick={this.onContentChange.bind(this, "stencilTab")}>Stencil</button>
            <br /><br />
            {contentToDisplay}

            <h5>Two way Data binding</h5>
            <input type="text" class="form-control" value={this.userName} onInput={this.onInputChange.bind(this)}/>
        </div>


        return mainContent;
    }
}