import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DeviceService} from '../../core/services/device.service';
import {ConfigService} from '../../core/services/config.service';
import {AhemProperties} from '../../model/properties-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   properties: AhemProperties;

  constructor(public deviceService: DeviceService, titleService: Title, metaService: Meta) {
    titleService.setTitle('AHEM - an Ad-Hoc Disposable Temporary Email Address');
    metaService.updateTag({ name: 'description', content: 'AHEM - an Ad-Hoc Disposable Temporary Email Address. ' +
      'Ad-hoc - created on demand. Disposable - ' +
      'you can throw it away. ' +
      'Temporary - your emails will be delete automatically. Don\'t expose your real E-mail. Use AHEM to fight SPAM.' });
       this.properties = ConfigService.properties;
  }

  ngOnInit() {
  }

}