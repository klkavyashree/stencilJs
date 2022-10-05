import { Component, h, State, Prop, Event, EventEmitter } from '@stencil/core';


@Component({
    tag: 'search-world',
    styleUrl: 'search-world.css',
    shadow: true
})
export class SearchWorld {
    @Prop({mutable: true}) searchText: string;

    @State() searchedResult: {name: string; marketOpen: string}[] = [];
    
    getSearchedResult(){
        fetch('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+ this.searchText +'&apikey=demo')
        .then(response => response.json())
        .then(response => {
            var metaData = response['bestMatches'];
            this.searchedResult = metaData.map(data=>{
                return{
                    name: data['2. name'],
                    marketOpen: data['5. marketOpen']
                }
            })
        })
        .catch(err => console.log(err));
    }

    @Event({bubbles: true, composed: true}) selectOfTab : EventEmitter<string>;

    onSelect(name: string){
        this.selectOfTab.emit(name);
    }

    onChangeInput(event: Event){
        this.searchText = (event.target as HTMLInputElement).value;
    }
    render() {
        return (
           <div class="main-search-div">
               <input class="my-input-textbox" type="text" value={this.searchText} onInput={this.onChangeInput.bind(this)}/>
               <button class="btn-react" onClick={this.getSearchedResult.bind(this)}>Search</button>
               <hr />
               <br />
               <table id="api-table">
                   {this.searchedResult.map(result => (
                       <tr onClick={this.onSelect.bind(this, result.name)}>
                           <td>{result.name}</td>
                           <td>{result.marketOpen}</td>
                       </tr>
                   ))}
               </table>
           </div>
        );
    }
}