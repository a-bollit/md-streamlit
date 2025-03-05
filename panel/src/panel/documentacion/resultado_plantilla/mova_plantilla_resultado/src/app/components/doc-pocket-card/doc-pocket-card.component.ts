import {Component, ViewChild} from '@angular/core';
import {AppService} from '@mova/components/core';
import {MvPocketCard, pocketCardData} from '@mova/components/pocket-card';
@Component({
  selector: 'app-doc-pocket-card',
  templateUrl: './doc-pocket-card.html',
  styleUrls: ['./doc-pocket-card.scss'],
})
export class DocPocketCard {
  metodoDeUsoExampleHTML = `
  <mv-pocket-card #pocketCard [data]="oDataExample">

  </mv-pocket-card>
  <mv-button
    class="btnExamples"
    color="primary"
    appearance="raised"
    (clickEvent)="showQR()">
    showQR
  </mv-button>
  <mv-button
    class="btnExamples"
    color="primary"
    appearance="raised"
    (clickEvent)="cardImage()">
    cardImage
  </mv-button>
  <mv-button
    class="btnExamples"
    color="primary"
    appearance="raised"
    (clickEvent)="downloadPKPass()">
    downloadPKPass
  </mv-button>
  <mv-button
    class="btnExamples"
    color="primary"
    appearance="raised"
    (clickEvent)="reload()">
    reload
  </mv-button>
  
  <mv-pocket-card #pocketCard [data]="oDataExample">

  `;
  metodoDeUsoExampleTS = `
  
  import { MvPocketCard, pocketCardData } from '@mova/components/pocket-card';
  ...
 oDataExample:pocketCardData = {
  id: "@",
  card_number: "28/007789/2014.4",
  expiration_date: "2022-05-08T00:00:00.000Z",
  dni_nie: "00000001R",
  card_type: "TFI",
  load_on_init: true,

  hide_button_export: false,
  hide_button_images: false,
  hide_button_qr: false,
  hide_button_reload: false,

  url_card_images: "http://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getImagenTarjeta.json",
  url_card_pkpass: "http://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getPkpass.json",
  url_card_qr: "http://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getCodigoQR.json",
  token: "eyJhbGciOiJIUzI1NiJ9.VEZJfDI4LzAwNzc4OS8yMDE0LjR8MDAwMDAwMDFSfDA4LzA1LzIwMjI.Rip0gppP5k2BVND9C1e1Bp9UD2NO2ccEJTRrSUFp0wo"

  @ViewChild('pocketCard', {static: false}) pocketCard: MvPocketCard;

  showQR(){
    this.pocketCard.ShowQR();
  }
  cardImage(){
    this.pocketCard.ShowCardImage();
  }
  downloadPKPass(){
    this.pocketCard.DownloadPass();
  }
  reload(){
    this.pocketCard.reload();
  }
 } 
 
  `;

  metodosExampleHTML = `
  <mv-pocket-card #pocketCard [data]="oDataExample">

  </mv-pocket-card>
  `;
  metodosExampleTS = `
  import { MvPocketCard, pocketCardData } from '@mova/components/pocket-card';
  ...
  oDataExample:pocketCardData = {
    id: "@",
    card_number: "28/007789/2014.4",
    expiration_date: "2022-05-08T00:00:00.000Z",
    dni_nie: "00000001R",
    card_type: "TFI",
    load_on_init: true,

    hide_button_export: false,
    hide_button_images: false,
    hide_button_qr: false,
    hide_button_reload: false,

    url_card_images: "http://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getImagenTarjeta.json",
    url_card_pkpass: "http://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getPkpass.json",
    url_card_qr: "http://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getCodigoQR.json",
    token: "eyJhbGciOiJIUzI1NiJ9.VEZJfDI4LzAwNzc4OS8yMDE0LjR8MDAwMDAwMDFSfDA4LzA1LzIwMjI.Rip0gppP5k2BVND9C1e1Bp9UD2NO2ccEJTRrSUFp0wo"

    @ViewChild('pocketCard', {static: false}) pocketCard: MvPocketCard;

  } 
 
  `;
  inputExample = `
  {
    "numTarjeta":"28/007789/2014.4",
    "fcCaducidad":"2022-05-08",
    "dsDniNie":"11223344A",
    "tipoTarjeta"="TFI"
  }
  `;
  outputExample = `
  {
    "correcto": "true",
    "mensaje": "",
    "fichero": "iVBORw0KGgoAAAANSUhEUgAABcUAAAfQCAYAAA..."
  }
  `;

  generacionPkpassExample = `
  /*


#### Certificados firma pkpass y CA Apple ####

# CA de Apple obtenida de https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer
cjov.pkpass.apple.url = /usr/aplic_ICM/certificados/key/AppleWWDRCA.cer

# Certificado PKPASS generado por Madrid Digital (detallar procedimiento)
cjov.pkpass.url = /usr/aplic_ICM/certificados/key/CJOV_PKPASS_prod.p12

# Identificador de la cuenta de Madrid Digital (fijo)
cjov.pkpass.teamIdentifier=RA47BU2L8D

# BundleId del certificado PKPPASS
cjov.pkpass.passTypeIdentifier=pass.org.madrid.CJOV.carnetJovenPKPass

# Password  del certificado PKPPASS
cjov.pkpass.password=xxxx

*/


package org.madrid.cjov.rest_carnet.negocio.services;
 
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.security.cert.CertificateException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
 
import org.apache.commons.lang3.StringUtils;
import org.madrid.cjov.rest_carnet.negocio.dto.SolicjovenDTO;
import org.madrid.cjov.rest_carnet.negocio.util.Constantes;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
 
import atlas.core.exceptions.ServiceException;
import de.brendamour.jpasskit.PKBarcode;
import de.brendamour.jpasskit.PKField;
import de.brendamour.jpasskit.PKPass;
import de.brendamour.jpasskit.enums.PKBarcodeFormat;
import de.brendamour.jpasskit.passes.PKEventTicket;
import de.brendamour.jpasskit.signing.PKFileBasedSigningUtil;
import de.brendamour.jpasskit.signing.PKPassTemplateInMemory;
import de.brendamour.jpasskit.signing.PKSigningException;
import de.brendamour.jpasskit.signing.PKSigningInformation;
import de.brendamour.jpasskit.signing.PKSigningInformationUtil;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;
 
/**
 * Clase para la generación del pkpass para Carnet JOVEN (CJOV)
 *
 */
@Service("carnetpkPassPasswordalletService")
@Log4j2
public class CarnetpkPassPasswordalletServiceImpl implements CarnetpkPassPasswordalletService {
 
    // Logger para trazar logs de log4j
    private static Logger log = LoggerFactory.getLogger(CarnetpkPassPasswordalletServiceImpl.class);
	
    // Ruta del certificado PKPASS
    private String rutaCertificadoPkPassP12 = "/usr/aplic_ICM/certificados/key/CJOV_PKPASS_prod.p12"

    /** BundleID del Certificado PKPASS */
    private String passTypeIdentifier = "pass.org.madrid.CJOV.carnetJovenPKPass";	
	
	/** pkPassPasswordord del Certificado PKPASS **/
    private final String pkPassPassword = "xxxxxxxx";
 
    /** The team ID, taken from the certificate */
    private String teamID = "RA47BU2L8D";
	
	// Ruta del certificado de APPLE. Se obtiene de  https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer
	rutaAppleCA = "/usr/aplic_ICM/certificados/key/AppleWWDRCAG3.cer"
	
	
	/** The background color of pass */
    private String backgroundColor = "";
	
    /** version */
    private int version = 1;
 
    /** The pass description */
    private String description = "CarneJoven";
 
    /** The name of primary field of the pass */
    private String primaryFieldName = "NOMBRE Y APELLIDOS";
 
    /** The name of primary header of the pass */
    private String primaryHeader = "NOMBRE Y APELLIDOS";
 
    /** The name of secondary field of the pass */
    private String secondaryFieldName = "NÚMERO DE CARNÉ";
 
    /** The name of secondary header of the pass */
    private String secondaryHeader = "NÚMERO DE CARNÉ";
 
    /** The name of secondary field of the pass */
    private String secondaryFieldName2 = "EXPIRA";
 
    /** The name of secondary header of the pass */
    private String secondaryHeader2 = "EXPIRA";
 
    /** The name of organization issuing the pass */
    private final String orgName = "Comunidad de Madrid";
 

 
 
    /**
     * Metodo encargado de crear y firmar un pkpass
     *
     * @param dto datos para crear el pkpass
     * @return byte[] con el fichero pkpass zipeado y firmado
     * @throws ServiceException
     */
    @Override
    public byte[] creaCarnetPKPass(SolicjovenDTO dto) throws ServiceException {
 
        InputStream resourceCertificadoPkPassP12 = null;
        InputStream resourceAppleCA = null;
 
        byte[] signedAndZippedPkPassArchive = null;
 
        try {
 
            String strNombre = dto.getSolinombre().toUpperCase() + " " + dto.getSoliapellidoPrimero().toUpperCase();
            if (StringUtils.isNotBlank(dto.getSoliapellidoSegundo())) {
                strNombre = strNombre + " " + dto.getSoliapellidoSegundo().toUpperCase();
            }
 
            String id = dto.getEyca();
 
            //Fecha de caducidad.
            String txtCaduc = new SimpleDateFormat("MM/yyyy").format(dto.getEycaExpirated());
 					
 
 			// -------- Creación del PKPASS --------
			log.info("Creando fichero PKPASS");

            PKPass pkPassObject = new PKPass();
 
            PKEventTicket pkEventTicket = new PKEventTicket();
 
            // name, label, value
            PKField pkFieldNombre = new PKField(primaryFieldName, primaryHeader, strNombre);
            PKField pkFieldEyca = new PKField(secondaryFieldName, secondaryHeader, id);
            PKField pkFieldExpira = new PKField(secondaryFieldName2, secondaryHeader2, txtCaduc);
            pkEventTicket.addPrimaryField(pkFieldNombre);
 
            List<PKField> lstPkSecundary = new ArrayList<>();
            lstPkSecundary.add(pkFieldEyca);
            lstPkSecundary.add(pkFieldExpira);
            pkEventTicket.setSecondaryFields(lstPkSecundary);
 
            PKBarcode barcode = new PKBarcode();
            barcode.setFormat(PKBarcodeFormat.PKBarcodeFormatQR);
            barcode.setMessage(id);
            barcode.setMessageEncoding(Charset.forName("utf-8"));
            List<PKBarcode> barcodeList = new ArrayList<>();
            barcodeList.add(barcode);
 
            pkPassObject.setBackgroundColor(backgroundColor);
            pkPassObject.setFormatVersion(version);
            pkPassObject.setPassTypeIdentifier(passTypeIdentifier);
            pkPassObject.setSerialNumber(id);
            pkPassObject.setTeamIdentifier(teamID);
            pkPassObject.setOrganizationName(orgName);
            pkPassObject.setDescription(description);
            pkPassObject.setEventTicket(pkEventTicket);
            pkPassObject.setBarcodes(barcodeList);
 
            PKPassTemplateInMemory pkPassTemplateInMemory = new PKPassTemplateInMemory();
            PKSigningInformation pkSigningInformation;
 
            ClassLoader classLoader =   Thread.currentThread().getContextClassLoader();
            InputStream logoFile =   classLoader.getResourceAsStream("eventticket/logo."
                    + Constantes.Formato.FORMATO_PNG);
            InputStream logoFileRetina =   classLoader.getResourceAsStream("eventticket/logo@2x."
                    + Constantes.Formato.FORMATO_PNG);
            InputStream backgroundFile =   classLoader.getResourceAsStream("eventticket/background."
                    + Constantes.Formato.FORMATO_PNG);
            InputStream backgroundFileRetina =   classLoader.getResourceAsStream("eventticket/background@2x."
                    + Constantes.Formato.FORMATO_PNG);
 
 
            pkPassTemplateInMemory.addFile(PKPassTemplateInMemory.PK_ICON, logoFile);
            pkPassTemplateInMemory.addFile(PKPassTemplateInMemory.PK_ICON_RETINA, logoFile);
            pkPassTemplateInMemory.addFile(PKPassTemplateInMemory.PK_BACKGROUND, backgroundFile);
            pkPassTemplateInMemory.addFile(PKPassTemplateInMemory.PK_BACKGROUND_RETINA, backgroundFileRetina);
            pkPassTemplateInMemory.addFile(PKPassTemplateInMemory.PK_LOGO, logoFile);
            pkPassTemplateInMemory.addFile(PKPassTemplateInMemory.PK_LOGO_RETINA, logoFileRetina);
 

			// -------- Firma y Zippeo del PKPASS ---------
			log.info("Firmando fichero PKPASS");
			
			// Carga del fichero PkPass generado por Madrid Ditital
			log.info("Certificado PkPASS: " +  rutaCertificadoPkPassP12);
            resourceCertificadoPkPassP12 = getClass().getClassLoader().getResourceAsStream(rutaCertificadoPkPassP12);                        
             
 
			// Carga de la CA de Apple descargada de https://www.apple.com/certificateauthority/AppleWWDRCAG3.cer
			log.info("CA de Apple: " +  rutaAppleCA);
			resourceAppleCA = getClass().getClassLoader().getResourceAsStream(rutaAppleCA);
			
			// Información de la firma
			pkSigningInformation = new PKSigningInformationUtil()
                    .loadSigningInformationFromPKCS12AndIntermediateCertificate(
						resourceCertificadoPkPassP12, 
						pkPassPassword,
                        resourceAppleCA);

			// Firmar y zipear
            PKFileBasedSigningUtil pkSigningUtil = new PKFileBasedSigningUtil();
            signedAndZippedPkPassArchive = pkSigningUtil.createSignedAndZippedPkPassArchive(pkPassObject,
                pkPassTemplateInMemory, pkSigningInformation);
 
			log.info("Fichero PKPASS generado y firmado");
            return signedAndZippedPkPassArchive;
 
         }  catch (CertificateException | IOException | PKSigningException e) {
             log.error("Error generandoPKPASS de " + passTypeIdentifier, e);
         } finally {
             if (resourceCertificadoPkPassP12 != null) {
                 try {
                     resourceCertificadoPkPassP12.close();
                 } catch (IOException e) {
                    log.error(e.getMessage());
                 }
             }
             if (resourceAppleCA != null) {
                 try {
                     resourceAppleCA.close();
                 } catch (IOException e) {
                     log.error(e.getMessage());
                 }
             }
         }
        return signedAndZippedPkPassArchive;
 
    }
 
}


  `;

 oDataExample:pocketCardData = {
   card_number: '28/007789/2014.4',
   expiration_date: '2022-05-08T00:00:00.000Z',
   dni_nie: '00000001R',
   card_type: 'TFI',
   load_on_init: true,

   hide_button_export: false,
   hide_button_images: false,
   hide_button_qr: false,
   hide_button_reload: false,
   url_card_images: 'https://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getImagenTarjeta.json',
   url_card_pkpass: 'https://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getPkpass.json',
   url_card_qr: 'https://gestiona3.madrid.org/portalapps/util/mova-pocket-card-rest-example/getCodigoQR.json',


   token: 'eyJhbGciOiJIUzI1NiJ9.VEZJfDI4LzAwNzc4OS8yMDE0LjR8MDAwMDAwMDFSfDA4LzA1LzIwMjI.Rip0gppP5k2BVND9C1e1Bp9UD2NO2ccEJTRrSUFp0wo',

 }

 @ViewChild('pocketCard', {static: false}) pocketCard: MvPocketCard;

 constructor(
    public _appService:AppService,

 ) {

 }

 showQR() {
   this.pocketCard.ShowQR();
 }
 cardImage() {
   this.pocketCard.ShowCardImage();
 }
 downloadPKPass() {
   this.pocketCard.DownloadPass();
 }
 reload() {
   this.pocketCard.reload();
 }
}
