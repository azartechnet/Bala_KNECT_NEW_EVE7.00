
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Login=()=>{
    return(
         <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style={{ width: "350px" }}>
      <h3 class="text-center mb-3">Login</h3>

      <form>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" placeholder="Enter username" required/>
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Enter password" required/>
        </div>

        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
    )
}
export default Login;