/** ************************************************
 * Componentes externos, de Material y de Angular *
 **************************************************/

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ApplicationRef,
  LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes, ExtraOptions, Router} from '@angular/router';
import {HighlightModule} from 'ngx-highlightjs';
import {MatomoModule} from 'ngx-matomo';
import {DateAdapter} from '@angular/material';
import {ServiceWorkerModule} from '@angular/service-worker';
import {DocApigisViewer} from "./components/doc-apigis-viewer/doc-apigis-viewer.component";
import {LayoutApigisExamples} from "./components/layout-apigis-examples/layout-apigis-examples.component";
import {LayoutApigisSimple} from "./components/layout-apigis-simple/layout-apigis-simple.component";
import {LayoutApigisGrid} from "./components/layout-apigis-grid/layout-apigis-grid.component";
import {LayoutApigisToc} from "./components/layout-apigis-toc/layout-apigis-toc.component";
import {LayoutApigisDraw} from "./components/layout-apigis-draw/layout-apigis-draw.component";
import {LayoutApigisMeasure} from "./components/layout-apigis-measure/layout-apigis-measure.component";
import {LayoutApigisIdentify} from "./components/layout-apigis-identify/layout-apigis-identify.component";
import {LayoutApigisSymbology} from "./components/layout-apigis-symbology/layout-apigis-symbology.component";
import {LayoutApigisFilters} from "./components/layout-apigis-filters/layout-apigis-filters.component";
import {LayoutApigisHover} from "./components/layout-apigis-hover/layout-apigis-hover.component";
import {LayoutApigisCluster} from "./components/layout-apigis-cluster/layout-apigis-cluster.component";
import {LayoutApigisGeocoder} from "./components/layout-apigis-geocoder/layout-apigis-geocoder.component";
import {LayoutApigisReverseGeocoder} from "./components/layout-apigis-reverse-geocoder/layout-apigis-reverse-geocoder.component";
import {DocApigisViewerMap} from "./components/doc-apigis-viewer-map/doc-apigis-viewer-map.component";
import {DocumentationApigis} from "./components/documentation-apigis/documentation-apigis.component";
import {DocApigisIntegration} from "./components/doc-apigis-integration/doc-apigis-integration.component";
import {DocApigisGuideConsiderations} from "./components/doc-apigis-guide-considerations/doc-apigis-guide-considerations.component";
import {DocApigisDependencies} from "./components/doc-apigis-dependencies/doc-apigis-dependencies.component";
import {DocApigisMap} from "./components/doc-apigis-map/doc-apigis-map.component";
import {DocApigisLayers} from "./components/doc-apigis-layers/doc-apigis-layers.component";
import {DocApigisImage} from "./components/doc-apigis-image/doc-apigis-image.component";
import {DocApigisOverlay} from "./components/doc-apigis-overlay/doc-apigis-overlay.component";
import {DocApigisTile} from "./components/doc-apigis-tile/doc-apigis-tile.component";
import {DocApigisVector} from "./components/doc-apigis-vector/doc-apigis-vector.component";
import {DocApigisVectortile} from "./components/doc-apigis-vectortile/doc-apigis-vectortile.component";
import {DocApigisWMTS} from "./components/doc-apigis-wmts/doc-apigis-wmts.component";
import {DocApigisXYZ} from "./components/doc-apigis-xyz/doc-apigis-xyz.component";
import {DocApigisSimplefillsymbol} from "./components/doc-apigis-simplefillsymbol/doc-apigis-simplefillsymbol.component";
import {DocApigisSimplelinesymbol} from "./components/doc-apigis-simplelinesymbol/doc-apigis-simplelinesymbol.component";
import {DocApigisSimplemarkersymbol} from "./components/doc-apigis-simplemarkersymbol/doc-apigis-simplemarkersymbol.component";
import {DocApigisServers} from "./components/doc-apigis-servers/doc-apigis-servers.component";
import {DocApigisLoader} from "./components/doc-apigis-loader/doc-apigis-loader.component";
import {DocApigisGeocoders} from "./components/doc-apigis-geocoders/doc-apigis-geocoders.component";
import {DocApigisUtils} from "./components/doc-apigis-utils/doc-apigis-utils.component";
import {DocApigisFilters} from "./components/doc-apigis-filters/doc-apigis-filters.component";
import {DocApigisPrint} from './components/doc-apigis-print/doc-apigis-print.component';
import {DocApigisCatastro} from './components/doc-apigis-catastro/doc-apigis-catastro.component';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');


// ---------------------------------------------------------------------------//
// ----------- NO TOCAR EL CÓDIGO CONTENIDO ENTRE ESTAS LINEAS ---------------//
// -------------------------------( INI )-------------------------------------//

/** ***************************
 * Elementos propios de MOVA *
 *****************************/

// Módulos:
// Incluir el módulo de material
import {MaterialModule} from '../mova/modules/material.module';
// Incluir el módulo de MOVA
import {MovaModule} from '../mova/modules/mova.module';

// Componentes MOVA:
// Componente principal de la App preparado para MOVA
import {AppComponent} from '../mova/components/app/app.component';
// AuthGuard
import {AuthGuard,
  InterceptorService} from '@mova/components/core';
import {MvDeviceView} from '@mova/components/device-view';
import {MvBrokerView} from '@mova/components/broker-view';
import {MvDialog} from '@mova/components/dialog';
import {MvDialogError} from '@mova/components/dialog-error';
import {MvSnackBar} from '@mova/components/snack-bar';
import {MvInitView} from '@mova/components/init-view';
import {MvLoginView} from '@mova/components/login-view';
import {MvLogoutBrokerView} from '@mova/components/logout-broker-view';
import {MvRateView} from '@mova/components/rate-view';
import {LandingView} from './components/landing-view/landing-view.component';

const MOVA_COMPONENTS = [AppComponent]; // Declarations
const MOVA_ENTRY_COMPONENTS = [
  MvDialog,
  MvDialogError,
  MvSnackBar,
]; // EntryComponents
const MOVA_PROVIDERS = {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true,
}; // Providers

// Routes:
const MOVA_ROUTES: any = [
  {path: 'broker-view', component: MvBrokerView},
  {path: 'device-view', component: MvDeviceView},
  {path: 'init-view', component: MvInitView, canDeactivate: [AuthGuard]},
  {path: 'landing-view', component: LandingView},
  {path: 'login-view', component: MvLoginView, canActivate: [AuthGuard]},
  {path: 'logout-broker', component: MvLogoutBrokerView},
  {path: 'rate-view', component: MvRateView},
];

// Opciones de navegación
const ROUTER_OPTIONS: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], // Corregir esto cuando exista header de la plantilla
};

/** ***************************************************
 * Configuración de la dependencia 'ngx-highlightjs' *
 *****************************************************/

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import java from 'highlight.js/lib/languages/java';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml},
    {name: 'java', func: java},
  ];
}

// ---------------------------------------------------------------------------//
// ----------- NO TOCAR EL CÓDIGO CONTENIDO ENTRE ESTAS LINEAS ---------------//
// -------------------------------( FIN )-------------------------------------//

/** ***********************
 * Componentes de la App *
 *************************/

// Componentes de acción para ser insertados de forma dinámica
// Definir en el nodo entryComponents
import {HeaderAction1}
  from './components/header-action-1/header-action-1.component';
import {HeaderAction2}
  from './components/header-action-2/header-action-2.component';
import {HeaderAction3}
  from './components/header-action-3/header-action-3.component';
import {LateralMenu}
  from './components/lateral-menu/lateral-menu.component';

// Incluir en orden alfabético de la ruta de importación
// los componentes de la App
import {DataProtectionView}
  from './components/data-protection-view/data-protection-view.component';
import {Documentation}
  from './components/documentation/documentation.component';
import {DocAccessibility}
  from './components/doc-accessibility/doc-accessibility.component';
import {DocAppService}
  from './components/doc-app-service/doc-app-service.component';
import {DocBirthdate} from './components/doc-birthdate/doc-birthdate.component';
import {DocButton} from './components/doc-button/doc-button.component';
import {DocButtonLogin}
  from './components/doc-button-login/doc-button-login.component';
import {DocButtonScrollToTop}
  from './components/doc-button-scroll-to-top/doc-button-scroll-to-top.component';
import {DocConfigDefault}
  from './components/doc-config-default/doc-config-default.component';
import {DocConfigDefaultMainFrame}
  from './components/doc-config-default-main-frame/doc-config-default-main-frame.component';
import {DocCompilation}
  from './components/doc-compilation/doc-compilation.component';
import {DocComponentTheme}
  from './components/doc-component-theme/doc-component-theme.component';
import {DocCheckbox} from './components/doc-checkbox/doc-checkbox.component';
import {DocCheckVersion}
  from './components/doc-check-version/doc-check-version.component';
import {DocContentPolicy}
  from './components/doc-content-policy/doc-content-policy.component';
import {DocCryptoService}
  from './components/doc-crypto-service/doc-crypto-service.component';
import {DocDatepicker}
  from './components/doc-datepicker/doc-datepicker.component';
import {DocDeviceView}
  from './components/doc-device-view/doc-device-view.component';
import {DocDialog}
  from './components/doc-dialog/doc-dialog.component';
import {DocDialogError}
  from './components/doc-dialog-error/doc-dialog-error.component';
import {DocDropdownMenu}
  from './components/doc-dropdown-menu/doc-dropdown-menu.component';
import {DocEnvironment}
  from './components/doc-environment/doc-environment.component';
import {DocExternalLibraries}
  from './components/doc-external-libraries/doc-external-libraries.component';
import {DocFileUploader}
  from './components/doc-file-uploader/doc-file-uploader.component';
import {DocFooterTab}
  from './components/doc-footer-tab/doc-footer-tab.component';
import {DocFooterNavTab}
  from './components/doc-footer-nav-tab/doc-footer-nav-tab.component';
import {DocFooterNavTabExample1}
  from './components/doc-footer-nav-tab/doc-footer-nav-tab-example1/doc-footer-nav-tab-example1.component';
import {DocFooterNavTabExample2}
  from './components/doc-footer-nav-tab/doc-footer-nav-tab-example2/doc-footer-nav-tab-example2.component';
import {DocFooterNavTabExample3}
  from './components/doc-footer-nav-tab/doc-footer-nav-tab-example3/doc-footer-nav-tab-example3.component';
import {DocFooterNavTabExample4}
  from './components/doc-footer-nav-tab/doc-footer-nav-tab-example4/doc-footer-nav-tab-example4.component';
import {DocHeader}
  from './components/doc-header/doc-header.component';
import {DocHttpRequest}
  from './components/doc-http-request/doc-http-request.component';
import {DocInitView}
  from './components/doc-init-view/doc-init-view.component';
import {DocLandingView}
  from './components/doc-landing-view/doc-landing-view.component';
import {DocInput}
  from './components/doc-input/doc-input.component';
import {DocLoginView}
  from './components/doc-login-view/doc-login-view.component';
import {DocLocalStorageService}
  from './components/doc-local-storage-service/doc-local-storage-service.component';
import {DocMenu}
  from './components/doc-menu/doc-menu.component';
import {DocNotifications}
  from './components/doc-notifications/doc-notifications.component';
import {DocNotificationsConfig}
  from './components/doc-notifications-config/doc-notifications-config.component';
import {DocPdf}
  from './components/doc-pdf/doc-pdf.component';
import {DocPiwik}
  from './components/doc-piwik/doc-piwik.component';
import {DocPlatformConsiderations}
  from './components/doc-platform-considerations/doc-platform-considerations.component';
import {DocPlugins}
  from './components/doc-plugins/doc-plugins.component';
import {DocPluginSocialsharing}
  from './components/doc-plugin-socialsharing/doc-plugin-socialsharing.component';
import {DocPluginSafariViewController}
  from './components/doc-plugin-safari-view-controller/doc-plugin-safari-view-controller.component';
import {DocProductionDeploy}
  from './components/doc-production-deploy/doc-production-deploy.component';
import {DocProtectionView}
  from './components/doc-protection-view/doc-protection-view.component';
import {DocQrService}
  from './components/doc-qr-service/doc-qr-service.component';
import {DocRadio}
  from './components/doc-radio/doc-radio.component';
import {DocRateView}
  from './components/doc-rate-view/doc-rate-view.component';
import {DocRecaptcha}
  from './components/doc-recaptcha/doc-recaptcha.component';
import {DocScheme}
  from './components/doc-scheme/doc-scheme.component';
import {DocSelect}
  from './components/doc-select/doc-select.component';
import {DocSnackBar}
  from './components/doc-snack-bar/doc-snack-bar.component';
import {DocSessionStorageService}
  from './components/doc-session-storage-service/doc-session-storage-service.component';
import {DocShowWhen}
  from './components/doc-show-when/doc-show-when.component';
import {DocStylesGuideConsiderations}
  from './components/doc-styles-guide-considerations/doc-styles-guide-considerations.component';
import {DocStylesGuideIcons}
  from './components/doc-styles-guide-icons/doc-styles-guide-icons.component';
import {DocStylesGuideImages}
  from './components/doc-styles-guide-images/doc-styles-guide-images.component';
import {DocStylesGuideGrid12}
  from './components/doc-styles-guide-grid12/doc-styles-guide-grid12.component';
import {DocStylesGuideTheme}
  from './components/doc-styles-guide-theme/doc-styles-guide-theme.component';
import {DocStylesGuideTypography}
  from './components/doc-styles-guide-typography/doc-styles-guide-typography.component';
import {DocTableResponsive}
  from './components/doc-table-responsive/doc-table-responsive.component';
import {DocTextarea}
  from './components/doc-textarea/doc-textarea.component';
import {DocTreeFilter}
  from './components/doc-tree-filter/doc-tree-filter.component';
import {DocValuesList}
  from './components/doc-values-list/doc-values-list.component';
import {DocVersionNews}
  from './components/doc-version-news/doc-version-news.component';
import {DocViewportInfo}
  from './components/doc-viewport-info/doc-viewport-info.component';
import {DocWebappIcon}
  from './components/doc-webapp-icon/doc-webapp-icon.component';
import {DocNotificationWebPush}
  from './components/doc-notification-web-push/doc-notification-web-push.component';
import {FormsMenu}
  from './components/forms-menu/forms-menu.component';
import {FormsReactiveValidation}
  from './components/forms-reactive-validation/forms-reactive-validation.component';
import {FormsReactiveValidationNoMenu}
  from './components/forms-reactive-validation-no-menu/forms-reactive-validation-no-menu.component';
import {FormsReactiveValidationOnType}
  from './components/forms-reactive-validation-on-type/forms-reactive-validation-on-type.component';
import {FormsTemplateValidation}
  from './components/forms-template-validation/forms-template-validation.component';
import {FormsTemplateValidationOnType}
  from './components/forms-template-validation-on-type/forms-template-validation-on-type.component';
import {MainMenu}
  from './components/main-menu/main-menu.component';
import {Layout}
  from './components/layout/layout.component';
import {LayoutFooterMvMenu}
  from './components/layout-footer-mv-menu/layout-footer-mv-menu.component';
import {LayoutHealthExample}
  from './components/layout-health-example/layout-health-example.component';
import {LayoutHealthExample2}
  from './components/layout-health-example2/layout-health-example2.component';
import {LayoutListDetail}
  from './components/layout-list-detail/layout-list-detail.component';
import {LayoutMadridInvest}
  from './components/layout-madrid-invest/layout-madrid-invest.component';
import {LayoutMadridPortal}
  from './components/layout-madrid-portal/layout-madrid-portal.component';
import {LayoutMenus}
  from './components/layout-menus/layout-menus.component';
import {LayoutMenusExample1}
  from './components/layout-menus-example1/layout-menus-example1.component';
import {LayoutMenusExample2}
  from './components/layout-menus-example2/layout-menus-example2.component';
import {LayoutRealStatePortal}
  from './components/layout-real-state-portal/layout-real-state-portal.component';
import {LayoutResponsive}
  from './components/layout-responsive/layout-responsive.component';
import {LayoutStaticData}
  from './components/layout-static-data/layout-static-data.component';
import {LayoutStaticDataBill}
  from './components/layout-static-data-bill/layout-static-data-bill.component';
import {LayoutStaticDataCensus}
  from './components/layout-static-data-census/layout-static-data-census.component';
import {LayoutStaticDataMenu}
  from './components/layout-static-data-menu/layout-static-data-menu.component';
import {LayoutStaticDataReport}
  from './components/layout-static-data-report/layout-static-data-report.component';
import {LayoutTableResponsive}
  from './components/layout-table-responsive/layout-table-responsive.component';
import {LayoutTabs}
  from './components/layout-tabs/layout-tabs.component';
import {LayoutWizard}
  from './components/layout-wizard/layout-wizard.component';
import {LayoutWizardMenu}
  from './components/layout-wizard-menu/layout-wizard-menu.component';
import {LayoutWizardTop}
  from './components/layout-wizard-top/layout-wizard-top.component';
import {NotificationConfigView}
  from './components/notification-config-view/notification-config-view.component';
import {LastNotificationView}
  from './components/last-notifications-view/last-notifications-view.component';
import {UserProfileView}
  from './components/user-profile-view/user-profile-view.component';
import {DocLastNotifications}
  from './components/doc-last-notifications/doc-last-notifications.component';
import {DocDeviceService}
  from './components/doc-device-service/doc-device-service.component';
import {DocSqliteService}
  from './components/doc-sqlite-service/doc-sqlite-service.component';
import {DocPocketCard}
  from './components/doc-pocket-card/doc-pocket-card.component';
import {DocXHRDownload}
  from './components/doc-xhr-download/doc-xhr-download.component';
import {DataAccessibilityStatement}
  from './components/data-accessibility-statement/data-accessibility-statement.component';
import {DocDeeplinks}
  from './components/doc-deeplinks/doc-deeplinks.component';
import {DocInAppBrowser}
  from './components/doc-inappbrowser/doc-inappbrowser.component';
import {
  DocIconsSplashscreen,
} from './components/doc-icons-splashscreen/doc-icons-splashscreen.component';
import {
  StudentDetail,
} from './components/students/student-detail/student-detail.component';
import {
  StudentEdit,
} from './components/students/student-edit/student-edit.component';
import {
  StudentEditDialog,
} from './components/students/student-edit/student-edit-dialog.component';
import {
  StudentInfo,
} from './components/students/student-info/student-info.component';
import {StudentView} from './components/students/student-view.component';
import {DocSwipe} from './components/doc-swipe/doc-swipe.component';
import {HammerConfig} from './hammer.config';
import { DocAppPermissions } from './components/doc-app-permissions/doc-app-permissions.component';
import { SolicitudMapasApigisComponent } from './components/solicitud-mapas-apigis/solicitud-mapas-apigis.component';
/** ********************************
 * Configuración de la navegación *
 **********************************/

// Incluir en orden alfabético los componentes de navegaciónd
const appRoutes: Routes = [
  ...MOVA_ROUTES, // MOVA -> Necesario para el funcionamiento de
  {path: 'data-protection-view', component: DataProtectionView},
  {path: 'data-accessibility-statement', component: DataAccessibilityStatement},
  {path: 'documentation', component: Documentation},
  {path: 'doc-accessibility', component: DocAccessibility},
  {path: 'doc-app-service', component: DocAppService},
  {path: 'doc-app-permissions', component: DocAppPermissions},
  {path: 'doc-birthdate', component: DocBirthdate},
  {path: 'doc-button', component: DocButton},
  {path: 'doc-button-login', component: DocButtonLogin},
  {path: 'doc-button-scroll-to-top', component: DocButtonScrollToTop},
  {path: 'doc-checkbox', component: DocCheckbox},
  {path: 'doc-check-version', component: DocCheckVersion},
  {path: 'doc-compilation', component: DocCompilation},
  {path: 'doc-component-theme', component: DocComponentTheme},
  {path: 'doc-content-policy', component: DocContentPolicy},
  {path: 'doc-config-default', component: DocConfigDefault},
  {path: 'doc-config-default-main-frame', component: DocConfigDefaultMainFrame},
  {path: 'doc-crypto-service', component: DocCryptoService},
  {path: 'doc-device-service', component: DocDeviceService},
  {path: 'doc-sqlite-service', component: DocSqliteService},
  {path: 'doc-pocket-card', component: DocPocketCard},
  {path: 'doc-device-view', component: DocDeviceView},
  {path: 'doc-datepicker', component: DocDatepicker},
  {path: 'doc-dialog', component: DocDialog},
  {path: 'doc-dialog-error', component: DocDialogError},
  {path: 'doc-dropdown-menu', component: DocDropdownMenu},
  {path: 'doc-environment', component: DocEnvironment},
  {path: 'doc-external-libraries', component: DocExternalLibraries},
  {path: 'doc-file-uploader', component: DocFileUploader},
  {path: 'doc-footer-tab', component: DocFooterTab},
  {path: 'doc-footer-nav-tab', component: DocFooterNavTab},
  {path: 'doc-footer-nav-tab-example1', component: DocFooterNavTabExample1},
  {path: 'doc-footer-nav-tab-example2', component: DocFooterNavTabExample2},
  {path: 'doc-footer-nav-tab-example3', component: DocFooterNavTabExample3},
  {path: 'doc-footer-nav-tab-example4', component: DocFooterNavTabExample4},
  {path: 'doc-header', component: DocHeader},
  {path: 'doc-http-request', component: DocHttpRequest},
  {path: 'doc-init-view', component: DocInitView},
  {path: 'doc-input', component: DocInput},
  {path: 'doc-last-notifications', component: DocLastNotifications},
  {path: 'doc-landing-view', component: DocLandingView},
  {path: 'doc-login-view', component: DocLoginView},
  {path: 'doc-local-storage-service', component: DocLocalStorageService},
  {path: 'doc-menu', component: DocMenu},
  {path: 'doc-notifications', component: DocNotifications},
  {path: 'doc-notifications-config', component: DocNotificationsConfig},
  {path: 'doc-radio', component: DocRadio},
  {path: 'doc-rate-view', component: DocRateView},
  {path: 'doc-recaptcha', component: DocRecaptcha},
  {path: 'doc-scheme', component: DocScheme},
  {path: 'doc-pdf', component: DocPdf},
  {path: 'doc-piwik', component: DocPiwik},
  {path: 'doc-platform-considerations', component: DocPlatformConsiderations},
  {path: 'doc-plugins', component: DocPlugins},
  {path: 'doc-plugin-socialsharing', component: DocPluginSocialsharing},
  {
    path: 'doc-plugin-safari-view-controller',
    component: DocPluginSafariViewController,
  },
  {path: 'doc-production-deploy', component: DocProductionDeploy},
  {path: 'doc-protection-view', component: DocProtectionView},
  {path: 'doc-qr-service', component: DocQrService},
  {path: 'doc-select', component: DocSelect},
  {path: 'doc-snack-bar', component: DocSnackBar},
  {path: 'doc-session-storage-service', component: DocSessionStorageService},
  {path: 'doc-show-when', component: DocShowWhen},
  {
    path: 'doc-styles-guide-considerations',
    component: DocStylesGuideConsiderations,
  },
  {path: 'doc-styles-guide-icons', component: DocStylesGuideIcons},
  {path: 'doc-styles-guide-images', component: DocStylesGuideImages},
  {path: 'doc-styles-guide-grid12', component: DocStylesGuideGrid12},
  {path: 'doc-styles-guide-theme', component: DocStylesGuideTheme},
  {path: 'doc-styles-guide-typography', component: DocStylesGuideTypography},
  {path: 'doc-table-responsive', component: DocTableResponsive},
  {path: 'doc-swipe', component: DocSwipe},
  {path: 'doc-textarea', component: DocTextarea},
  {path: 'doc-tree-filter', component: DocTreeFilter},
  {path: 'doc-values-list', component: DocValuesList},
  {path: 'doc-version-news', component: DocVersionNews},
  {path: 'doc-icons-splashscreen', component: DocIconsSplashscreen},
  {path: 'doc-viewport-info', component: DocViewportInfo},
  {path: 'doc-webapp-icon', component: DocWebappIcon},
  {path: 'doc-notification-web-push', component: DocNotificationWebPush},
  {path: 'doc-xhr-download', component: DocXHRDownload},
  {path: 'doc-inappbrowser', component: DocInAppBrowser},
  {path: 'doc-deeplinks', component: DocDeeplinks},
  {path: 'forms-menu', component: FormsMenu},
  {path: 'forms-reactive-validation', component: FormsReactiveValidation},
  {path: 'forms-reactive-validation-no-menu', component: FormsReactiveValidationNoMenu},

  {
    path: 'forms-reactive-validation-on-type',
    component: FormsReactiveValidationOnType,
  },
  {path: 'forms-template-validation', component: FormsTemplateValidation},
  {
    path: 'forms-template-validation-on-type',
    component: FormsTemplateValidationOnType,
  },
  {path: 'main-menu', component: MainMenu},
  {path: 'layout', component: Layout},
  {path: 'layout-footer-mv-menu', component: LayoutFooterMvMenu},
  {path: 'layout-list-detail', component: LayoutListDetail},
  {path: 'layout-madrid-invest', component: LayoutMadridInvest},
  {path: 'layout-madrid-portal', component: LayoutMadridPortal},
  {path: 'layout-menus', component: LayoutMenus},
  {path: 'layout-menus-example1', component: LayoutMenusExample1},
  {path: 'layout-menus-example2', component: LayoutMenusExample2},
  {path: 'layout-responsive', component: LayoutResponsive},
  {path: 'layout-health-example', component: LayoutHealthExample},
  {path: 'layout-health-example2', component: LayoutHealthExample2},
  {path: 'layout-real-state-portal', component: LayoutRealStatePortal},
  {path: 'layout-static-data', component: LayoutStaticData},
  {path: 'layout-static-data-bill', component: LayoutStaticDataBill},
  {path: 'layout-static-data-census', component: LayoutStaticDataCensus},
  {path: 'layout-static-data-menu', component: LayoutStaticDataMenu},
  {path: 'layout-static-data-report', component: LayoutStaticDataReport},
  {path: 'layout-table-responsive', component: LayoutTableResponsive},
  {path: 'layout-tabs', component: LayoutTabs},
  {path: 'layout-wizard', component: LayoutWizard},
  {path: 'layout-wizard-menu', component: LayoutWizardMenu},
  {path: 'layout-wizard-top', component: LayoutWizardTop},
  {path: 'notification-config-view', component: NotificationConfigView},
  {path: 'last-notifications-view', component: LastNotificationView},
  {path: 'students', component: StudentView, canActivate: [AuthGuard]},
  {path: 'student-detail/:id', component: StudentDetail, canActivate: [AuthGuard]},
  {path: 'student-edit', component: StudentEdit, canActivate: [AuthGuard]},
  {path: 'student-edit/:id', component: StudentEdit, canActivate: [AuthGuard]},
  {path: 'student-info', component: StudentInfo},
  {path: 'user-profile-view', component: UserProfileView},
  {path: "solicitud-mapas-apigis", component: SolicitudMapasApigisComponent},
  {path: "documentation-apigis", component: DocumentationApigis},
  {path: "layout-apigis-examples", component: LayoutApigisExamples},
  {path: "layout-apigis-simple", component: LayoutApigisSimple},
  {path: "layout-apigis-grid", component: LayoutApigisGrid},
  {path: "layout-apigis-toc", component: LayoutApigisToc},
  {path: "layout-apigis-draw", component: LayoutApigisDraw},
  {path: "layout-apigis-measure", component: LayoutApigisMeasure},
  {path: "layout-apigis-identify", component: LayoutApigisIdentify},
  {path: "layout-apigis-symbology", component: LayoutApigisSymbology},
  {path: "layout-apigis-filters", component: LayoutApigisFilters},
  {path: "layout-apigis-cluster", component: LayoutApigisCluster},
  {path: "layout-apigis-hover", component: LayoutApigisHover},
  {path: "layout-apigis-geocoder", component: LayoutApigisGeocoder},
 
  {
    path: "layout-apigis-reverse-geocoder",
    component: LayoutApigisReverseGeocoder,
  },

  {
    path: "doc-apigis-guide-considerations",
    component: DocApigisGuideConsiderations,
  },
  {path: "doc-apigis-integration", component: DocApigisIntegration},
  {path: "doc-apigis-dependencies", component: DocApigisDependencies},
  {path: "doc-apigis-viewer", component: DocApigisViewer},
  {path: "doc-apigis-map", component: DocApigisMap},
  {path: "doc-apigis-layers", component: DocApigisLayers},
  {path: "doc-apigis-image", component: DocApigisImage},
  {path: "doc-apigis-tile", component: DocApigisTile},
  {path: "doc-apigis-xyz", component: DocApigisXYZ},
  {path: "doc-apigis-wmts", component: DocApigisWMTS},
  {path: "doc-apigis-vector", component: DocApigisVector},
  {path: "doc-apigis-overlay", component: DocApigisOverlay},
  {path: "doc-apigis-vectortile", component: DocApigisVectortile},
  {path: "doc-apigis-simplefillsymbol", component: DocApigisSimplefillsymbol},
  {path: "doc-apigis-simplelinesymbol", component: DocApigisSimplelinesymbol},
  {
    path: "doc-apigis-simplemarkersymbol",
    component: DocApigisSimplemarkersymbol,
  },
  {path: "doc-apigis-filters", component: DocApigisFilters},
  {path: "doc-apigis-servers", component: DocApigisServers},
  {path: "doc-apigis-loader", component: DocApigisLoader},
  {path: "doc-apigis-utils", component: DocApigisUtils},
  {path: "doc-apigis-geocoders", component: DocApigisGeocoders},
  {path: "doc-apigis-catastro", component: DocApigisCatastro},
  {path: "doc-apigis-print", component: DocApigisPrint},
  {path: '', pathMatch: 'full', redirectTo: 'init-view'},
  {path: '**', redirectTo: 'init-view'},
  
];

/** *************************
 * Configuración de fechas *
 ***************************/

/**
 * Formatos que se utilizarán en la aplicación para mostrar fechas.
 * Se pueden consultar los formatos disponibles aquí:
 *   https://momentjs.com/docs/#/displaying/format/
 * Variarán dependiendo del locale establecido.
 * En Mova está configurado el adaptador español.
 */
const MOMENT_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

/** ******************
 * Módulo principal *
 ********************/

@NgModule({
  // Incluir los componentes en orden alfabético respetando el formato camelCase
  declarations: [
    ...MOVA_COMPONENTS, // MOVA -> Necesario para el funcionamiento de MOVA
    DataProtectionView,
    DataAccessibilityStatement,
    Documentation,
    DocAccessibility,
    DocAppService,
    DocAppPermissions,
    DocBirthdate,
    DocButton,
    DocButtonLogin,
    DocButtonScrollToTop,
    DocConfigDefault,
    DocConfigDefaultMainFrame,
    DocCompilation,
    DocComponentTheme,
    DocCheckbox,
    DocCheckVersion,
    DocContentPolicy,
    DocCryptoService,
    DocDeviceService,
    DocSqliteService,
    DocPocketCard,
    DocDatepicker,
    DocDeviceView,
    DocFileUploader,
    DocFooterTab,
    DocFooterNavTab,
    DocFooterNavTabExample1,
    DocFooterNavTabExample2,
    DocFooterNavTabExample3,
    DocFooterNavTabExample4,
    DocDialog,
    DocDialogError,
    DocDropdownMenu,
    DocEnvironment,
    DocExternalLibraries,
    DocHeader,
    DocHttpRequest,
    DocInitView,
    DocInput,
    DocLastNotifications,
    DocLandingView,
    DocLoginView,
    DocLocalStorageService,
    DocMenu,
    DocNotifications,
    DocNotificationsConfig,
    DocRadio,
    DocRateView,
    DocRecaptcha,
    DocScheme,
    DocPdf,
    DocPiwik,
    DocPlatformConsiderations,
    DocPlugins,
    DocPluginSocialsharing,
    DocPluginSafariViewController,
    DocProductionDeploy,
    DocProtectionView,
    DocQrService,
    DocSelect,
    DocSessionStorageService,
    DocShowWhen,
    DocStylesGuideConsiderations,
    DocStylesGuideIcons,
    DocStylesGuideImages,
    DocStylesGuideGrid12,
    DocStylesGuideTheme,
    DocStylesGuideTypography,
    DocTextarea,
    DocSnackBar,
    DocTreeFilter,
    DocTableResponsive,
    DocValuesList,
    DocVersionNews,
    DocIconsSplashscreen,
    DocViewportInfo,
    DocWebappIcon,
    DocSwipe,
    DocNotificationWebPush,
    DocXHRDownload,
    DocInAppBrowser,
    DocDeeplinks,
    DocApigisViewer,
    LayoutApigisExamples,
    LayoutApigisSimple,
    LayoutApigisGrid,
    LayoutApigisToc,
    LayoutApigisDraw,
    LayoutApigisMeasure,
    LayoutApigisIdentify,
    LayoutApigisSymbology,
    LayoutApigisFilters,
    LayoutApigisHover,
    LayoutApigisCluster,
    LayoutApigisGeocoder,
    LayoutApigisReverseGeocoder,
    DocApigisViewerMap,
    DocumentationApigis,
    DocApigisIntegration,
    DocApigisGuideConsiderations,
    DocApigisDependencies,
    DocApigisMap,
    DocApigisLayers,
    DocApigisImage,
    DocApigisOverlay,
    DocApigisTile,
    DocApigisVector,
    DocApigisWMTS,
    DocApigisXYZ,
    DocApigisVectortile,
    DocApigisSimplefillsymbol,
    DocApigisSimplelinesymbol,
    DocApigisSimplemarkersymbol,
    DocApigisServers,
    DocApigisLoader,
    DocApigisGeocoders,
    DocApigisUtils,
    DocApigisFilters,
    DocApigisPrint,
    DocApigisCatastro,
    FormsMenu,
    FormsReactiveValidation,
    FormsReactiveValidationNoMenu,
    FormsReactiveValidationOnType,
    FormsTemplateValidation,
    FormsTemplateValidationOnType,
    HeaderAction1,
    HeaderAction2,
    HeaderAction3,
    LateralMenu,
    StudentDetail,
    StudentEdit,
    StudentEditDialog,
    StudentView,
    StudentInfo,
    MainMenu,
    LandingView,
    Layout,
    LayoutFooterMvMenu,
    LayoutListDetail,
    LayoutHealthExample,
    LayoutHealthExample2,
    LayoutMadridInvest,
    LayoutMadridPortal,
    LayoutMenus,
    LayoutMenusExample1,
    LayoutMenusExample2,
    LayoutRealStatePortal,
    LayoutResponsive,
    LayoutStaticData,
    LayoutStaticDataBill,
    LayoutStaticDataCensus,
    LayoutStaticDataReport,
    LayoutStaticDataMenu,
    LayoutTableResponsive,
    LayoutTabs,
    LayoutWizard,
    LayoutWizardMenu,
    LayoutWizardTop,
    NotificationConfigView,
    LastNotificationView,
    UserProfileView,
    SolicitudMapasApigisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MovaModule,
    RouterModule.forRoot(
        appRoutes,
        ROUTER_OPTIONS),
    HighlightModule.forRoot({
      languages: hljsLanguages,
    }),
    MatomoModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: true}),
  ],
  // Incluir los componentes que necesiten ser
  // incluidos dinámicamente (mv-component-host)
  entryComponents: [
    ...MOVA_ENTRY_COMPONENTS, // MOVA: Necesario para el funcionamiento de MOVA
    HeaderAction1, // Componente de acción 1 del header
    HeaderAction2, // Componente de acción 2 del header
    HeaderAction3, // Componente de acción 3 del header
    LateralMenu, // Componente del menú lateral
    StudentEditDialog,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    MOVA_PROVIDERS,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS, // Formatos para datepicker
      useValue: MOMENT_FORMATS,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-ES',
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
    ApplicationRef,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue:
      {
        displayDefaultIndicatorType: false,
        showError: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
