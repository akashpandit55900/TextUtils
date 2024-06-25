# using basic react router

1) Install this external package:
npm install react-router-dom

2) Import the following:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

3) Use as follows: 
<Router>
	<Routes>
		<Route exact path='Path You want to use' element={<What you want to render >}/> 
		// Example-->  <Route exact path="/aboutMe" element={<About />}></Route>	
		//path name -> kuch bhi name do, ye path us component ke liye set hoga	
		//use exact path for eact rendering or correct component
	</Routes>
</Router>


e.g:
return (
    <>
      <Router>
        <Navbar title="TextUtils" about="AboutText" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
            <div className="container my-3">
                <Routes>
                    <Route exact path='/' element={
                        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={Mode} />
                    }/>
                    <Route exact path='/aboutUs' element={
                        <About/>
                    }/>
                </Routes>
            </div>
        </Router>
    </>
);