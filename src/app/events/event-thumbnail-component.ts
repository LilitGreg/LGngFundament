import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component ({
    selector:'event-thumbnail',
   template:`
    <div class="well hoverwell thumbnail">
    <h2> {{event?.name}} </h2>
    <div> Date: {{ event?.date }}</div>
   
   <!--- attach class green-->
   <!-- <div [class.green] = "event?.time === '8:00 am' " 
    [ngSwitch] = "event?.time">-->

  <!-- attach class green with ngClass -->
    <div [ngClass] = "{green: event?.time === '8:00 am', bold: event?.time === '8:00 am' }" 
    [ngSwitch] = "event?.time">


 <!-- attach class using function  -->
   <!-- <div [ngClass] = "getStartTimeClass()" 
    [ngSwitch] = "event?.time"> -->


  <!--style -->
    
   <!-- <div [style.color] = "event?.time === '8:00 am' ? '#003300' : '#bbb' " 
    [ngSwitch] = "event?.time">  -->

  <!---ngStyle--->  

    <!--<div [ngStyle] = "{ 'color': event?.time === 8:00 am' ? '#003300': '#bbb',
     'font-weight': event?.time === 8:00 am' ? 'bold' : 'normal'} " 
    [ngSwitch] = "event?.time"> -->


  <!---ngStyle function -->

  
  <!-- <div [ngStyle] = "getStartTimeStyle()" 
    [ngSwitch] = "event?.time">  -->

       Time: {{ event?.time }}
      <span *ngSwitchCase = "'8:00 am'">  (Early Start) </span>
      <span *ngSwitchCase= "'10:00 am'" >  (Late Start) </span>
      <span *ngSwitchDefault>  (Normal Start)</span>
      
    </div>

    <div> Price:  \${{ event?.price}} </div>
    
    <!---remove  location from the DOM completely using ngif---->


    <div *ngIf="event?.location">
    <span> Location: {{event?.location?.address}}</span>
   
    <span class="pad-left"> 
    <!--- Interpolation: when we want just display the date -->
        {{event?.location?.city}},
        {{event?.location?.coutry}}
    </span>
    </div>


    <!----remove location using hidding approach--->

    <div [hidden]="!event?.location">
        <span> Location: {{event?.location?.address}}</span>
    
        <span class="pad-left"> 
        <!--- Interpolation: when we want just display the date -->
            {{event?.location?.city}},
            {{event?.location?.coutry}}
        </span>
    </div>

    <!---Event binding  this bind the button's click event to the do something function on our component
     event binding use parentheses around element event to bind to versus property bindings that use square brackets. -->

    <button class="btn btn-primary" (click) = "handleClickMe()"> Click </button>
    
    </div>

    <!--- Property binding is used when we want to bind date to the property of the DOM element-->

    <img  [src] = "event.imageUrl"  />
  `,
  styles: [`
   .green { color: #003300 !important; }
   .bold { font-weight: bold; }
   .thumbnail { height: 250px; }
   .pad-left {
       margin-left: 10px;
   }
   
  `]
})

//

export class EventThumbnailComponent {
    @Input() event:any
    @Output() eventClick = new EventEmitter()
    someProperty: any ="some value"

    getStartTimeClass() {
        if ( this.event && this.event.time === '8.00 am')
         return ['green', 'bold']
        return [] 
        //return {green: isEarlyStart, bold: isEarlyStart  }

    }

    getStartTimeStyle(): any {
        if ( this.event && this.event.time === '8.00 am')
         return { color: '#003300' , 'font-weight': 'bold'}
        return {}
    }

    logFoo() {
        console.log('foo');
    }
    

    handleClickMe(){
        //console.log('clicked!');
        this.eventClick.emit(this.event.name);
    }
}