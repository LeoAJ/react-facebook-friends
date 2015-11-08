/*global FB*/

export function getData() {

  return new Promise((resolve, reject) => {

    FB.api('/me?fields=name,picture.width(400).height(400)', (res) => {
      console.log(res);
      console.log('XXXXXXX');

      const {
        name,
        link,
        picture: {
          data: {
            url
          }
        }
      } = res;

      resolve({
        profileData: {
          name,
          link,
          url
        }
      })
    });

  });

}
