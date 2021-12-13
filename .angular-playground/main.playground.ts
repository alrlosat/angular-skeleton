import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { MaterialModule } from '../src/app/shared/material.module';
import { SandboxesDefined } from './sandboxes';

platformBrowserDynamic()
  .bootstrapModule(
    PlaygroundModule.configure({
      selector: 'ap-root',
      overlay: false,
      modules: [MaterialModule],
      sandboxesDefined: SandboxesDefined,
    })
  )
  .catch((err) => console.error(err));
