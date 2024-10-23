import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

// Configuracion Cloudinary 
cloudinary.config({
  cloud_name: 'react1',
  api_key: '919343134147675',
  api_secret: 'gRGtqiEzp72DP7_2r8tCWoPHctY',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  it('Debe subir el archivo corrrectamente a Cloudinary y eliminarlo después', async () => {
    const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    // Subir la imagen
    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    // Extrae el public_id de la URL devuelta
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    // Eliminar la imagen de Cloudinary. Usé Upload API (uploader.destroy) en vez de Admin API
    const result = await cloudinary.uploader.destroy(imageId);
    console.log('Imagen eliminada:', result);
    expect(result.result).toBe('ok');
  });

  it('Debe retornar null si no se envía el blob', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });

});

//Código de Fernando donde usa cloudinary.api.delete_resources([ 'journal/' + imageId ], { resource_type: 'image' }) ( no lo probé ):

 
//import { v2 as cloudinary } from 'cloudinary';
// import { fileUpload } from '../../src/helpers/fileUpload';

// cloudinary.config({
//     cloud_name: 'cursos-udemy',
//     api_key: '535484127987571',
//     api_secret: 'kTVWAm0r93sPlaQpl291HJINHY4',
//     secure: true
// });


// describe('Pruebas en fileUpload', () => {

//     test('debe de subir el archivo correctamente a cloudinary', async() => {

//         const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
//         const resp = await fetch( imageUrl );
//         const blob = await resp.blob();
//         const file = new File([blob], 'foto.jpg');

//         const url = await fileUpload( file );
//         expect( typeof url ).toBe('string');

//         // console.log(url);
//         const segments = url.split('/');
//         const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        
//         const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
//            resource_type: 'image'
//         });
//         // console.log({ cloudResp })

//     });

//     test('debe de retornar null', async() => {

//         const file = new File([], 'foto.jpg');
//         const url = await fileUpload( file );
//         expect( url ).toBe( null );
        
//     });


    
// });

