import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';

// Importación desde la dependencia empaquetada
import {MvBirthdateModule} from '@mova/components/birthdate';
import {MvBrokerViewModule} from '@mova/components/broker-view';
import {MvButtonModule} from '@mova/components/button';
import {MvButtonLoginModule} from '@mova/components/button-login';
import {MvButtonScrollToTopModule} from '@mova/components/button-scroll-to-top';
import {MvComponentHostModule} from '@mova/components/component-host';
import {MvCheckboxModule} from '@mova/components/checkbox';
import {MvCoreModule} from '@mova/components/core';
import {backOfficeModule} from '@mova/components/back-office';
import {MvDeviceViewModule} from '@mova/components/device-view';
import {MvDialogModule} from '@mova/components/dialog';
import {MvDialogErrorModule} from '@mova/components/dialog-error';
import {MvFooterTabModule} from '@mova/components/footer-tab';
import {MvFileUploaderModule} from '@mova/components/file-uploader';
import {MvHeaderModule} from '@mova/components/header';
import {MvInitViewModule} from '@mova/components/init-view';
import {MvInputModule} from '@mova/components/input';
import {MvLoginViewModule} from '@mova/components/login-view';
import {MvLogoutBrokerViewModule} from '@mova/components/logout-broker-view';

import {MvMainFrameModule} from '@mova/components/main-frame';
import {MvPdfViewerModule} from '@mova/components/pdf-viewer';
import {MvPocketCardModule} from '@mova/components/pocket-card';
import {MvNotificationConfigModule} from '@mova/components/notification-config';
import {MvLastNotificationModule} from '@mova/components/last-notifications';
import {MvRadioModule} from '@mova/components/radio';
import {MvRateViewModule} from '@mova/components/rate-view';
import {MvRecaptchaModule} from '@mova/components/recaptcha';
import {MvRenderOnScrollModule} from '@mova/components/render-on-scroll';
import {MvSelectModule} from '@mova/components/select';
import {MvSnackBarModule} from '@mova/components/snack-bar';
import {MvStarModule} from '@mova/components/star';
import {MvTableResponsiveModule} from '@mova/components/table-responsive';
import {MvTextareaModule} from '@mova/components/textarea';
import {MvTreeFilterModule} from '@mova/components/tree-filter';
import {MvValuesListModule} from '@mova/components/values-list';
import {MvViewportInfoModule} from '@mova/components/viewport-info';


@NgModule({
  declarations: [
  ],
  imports: [
    LayoutModule,
    MvBirthdateModule,
    MvBrokerViewModule,
    MvButtonModule,
    MvButtonLoginModule,
    MvButtonScrollToTopModule,
    MvComponentHostModule,
    MvCheckboxModule,
    MvCoreModule,
    MvDeviceViewModule,
    MvDialogModule,
    MvDialogErrorModule,
    MvFileUploaderModule,
    MvFooterTabModule,
    MvHeaderModule,
    MvInitViewModule,
    MvInputModule,
    MvLoginViewModule,
    MvLogoutBrokerViewModule,
    MvMainFrameModule,
    MvPdfViewerModule,
    MvNotificationConfigModule,
    MvLastNotificationModule,
    MvPocketCardModule,
    MvRadioModule,
    MvRateViewModule,
    MvRecaptchaModule,
    MvRenderOnScrollModule,
    MvSelectModule,
    MvSnackBarModule,
    MvStarModule,
    MvTableResponsiveModule,
    MvTextareaModule,
    MvTreeFilterModule,
    MvValuesListModule,
    MvViewportInfoModule,
    backOfficeModule,
  ],
  providers: [
  ],
  exports: [
    MvBirthdateModule,
    MvBrokerViewModule,
    MvButtonModule,
    MvButtonLoginModule,
    MvButtonScrollToTopModule,
    MvComponentHostModule,
    MvCheckboxModule,
    MvCoreModule,
    MvDeviceViewModule,
    MvDialogModule,
    MvDialogErrorModule,
    MvFileUploaderModule,
    MvFooterTabModule,
    MvHeaderModule,
    MvInitViewModule,
    MvInputModule,
    MvLoginViewModule,
    MvLogoutBrokerViewModule,
    MvMainFrameModule,
    MvPdfViewerModule,
    MvNotificationConfigModule,
    MvLastNotificationModule,
    MvPocketCardModule,
    MvRadioModule,
    MvRateViewModule,
    MvRecaptchaModule,
    MvRenderOnScrollModule,
    MvSelectModule,
    MvSnackBarModule,
    MvStarModule,
    MvTableResponsiveModule,
    MvTextareaModule,
    MvTreeFilterModule,
    MvValuesListModule,
    MvViewportInfoModule,
  ],
})
export class MovaModule {}
