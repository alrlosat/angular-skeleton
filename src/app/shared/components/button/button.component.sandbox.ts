import { sandboxOf } from 'angular-playground';
import { ButtonComponent } from './button.component';

export default sandboxOf(ButtonComponent, { label: 'Bouton' })
  .add('Basic button', {
    template: `<div class="flex flex-row flex-gap-10">
    <app-button></app-button>
    <app-button color="accent"></app-button>    
    <app-button color="warn"></app-button>    
    <app-button disabled="true"></app-button>    
    </div>`,
    context: 'when on a un bouton basique',
  })
  .add('Raised button', {
    template: `<div class="flex flex-row flex-gap-10">
    <app-button raised="true"></app-button>
    <app-button raised="true" color="accent"></app-button>    
    <app-button raised="true" color="warn"></app-button>    
    <app-button raised="true" disabled="true"></app-button>    
    </div>`,
  })
  .add('Stroked button', {
    template: `<div class="flex flex-row flex-gap-10">
    <app-button stroked="true"></app-button>
    <app-button stroked="true" color="accent"></app-button>    
    <app-button stroked="true" color="warn"></app-button>    
    <app-button stroked="true" disabled="true"></app-button>    
    </div>`,
  })
  .add('Icon button', {
    template: `<div class="flex flex-row flex-gap-10">
    <app-button icon="true"></app-button>
    <app-button icon="true" color="accent"></app-button>    
    <app-button icon="true" color="warn"></app-button>    
    <app-button icon="true" disabled="true"></app-button>    
    </div>`,
  });
