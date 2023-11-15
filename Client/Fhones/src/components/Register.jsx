export const Register = () => {
  return (
    <>
      <section
        className="h-100 gradient-form registerContainer"
        style={{ backgroundColor: "#eeeeee00" }}
        data-bs-theme="dark"
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1 loginText">
                          Register to Fhones
                        </h4>
                      </div>
                      <form>
                        <p className="loginText">
                          Please Register to your account
                        </p>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="username"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="email address"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-secondary btnCustom"
                            type="button"
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4 ">
                          <p className="mb-0 me-2 loginText">
                            Don't have an account?
                          </p>
                          <button type="button" className="btn">
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
