import React, { Component } from 'react';
import Aside from './aside'
import Header from './header'



export default class App extends Component {
    
    render() {
        return (
            <div>
                <Header/>

                <section class="row">
                    <aside class="col-12 col-md-4 col-lg-3">
                        <Aside/>
                    </aside>

                    <main class="col">
                        <header>
                           
                        </header>

                        <article>
                            
                        </article>
                    </main>

                </section>
            </div>
        );
    }


}
