export const LandingPage = () => {
/*   useEffect(() => {
    axios
      .get('http://localhost:6000/api/v1/events')
      .then((res) => {
        console.log('RES : ', res);
        console.log('DATA : ', res.data);
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  }, []); */
  /* 

axios.post("http://localhost:5000/auth/login", loginData)
      .then((result) => {
          console.log(result.data);
          await getLoggedIn();
          history.push("/player");
        })
      .catch(err => {
         console.log(err)
      })

 */

  /*  useEffect(() => {
    axios
      .get(`http://localhost:6000/api/v1/events`)
      .then((res) => console.log('RES : ', res))
      .then((res) => console.log('DATA : ', res.data))
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []); */
  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
    </div>
  );
};
