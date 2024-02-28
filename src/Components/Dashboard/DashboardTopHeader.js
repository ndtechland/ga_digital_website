import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
import "../CustomCss/DashboardHeader.css"

function DashboardTopHeader() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear user session information
        sessionStorage.removeItem('isUserLoggedIn');

        // Redirect to the login page or another appropriate page after logout
        navigate('/login');
    };


      //get basic information of user start
      const [userInfo, setuserInfo] = useState([])
      const token = sessionStorage.getItem('token');
  
  
      const userInfoList = async () => {
  
          if (token) {
              const { data } = await axios.get('https://crm.ndinfotech.com/api/EmployeeApi/GetEmployeeById',
                  {
                      headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${token}`
                      },
                  }
              );
              setuserInfo(data.data);
          }
      };
  
      useEffect(() => {
          userInfoList();
  
      }, []);


    return (
        <>
            <div id="logo">
                <Link to="/dashboard">
                    <span className="big-logo text-danger">GA Digital</span>
                    <span className="small-logo">GAD</span>
                </Link>
            </div>
            <div id="main-content">
                <div id="header">
                    <div className="header-left float-left">
                        <i id="toggle-left-menu" className="ion-android-menu" />
                    </div>
                    <div className="header-right float-right"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                       { <span className='p-2 mt-4 ' style={{cursor:"pointer"}}> Hi,{userInfo.firstName}</span>}
                        <img   style={{cursor:"pointer"}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJklEQVR4nO2Ze0xbVRzHGx9bYvjLxz+Cy5wzmURMphnjoS60YGF9OGe2wVCQP8BtEeMc3RBYMbq4EZVEaHm1uEcUCLhNxiipXdkjBv8BxhQ7NreZtfReDPfCBtyzsTF+5tymvFrKOW3pNOGXfJPm3Ht+9/M9r3vuqUSyFEuxFAEHADzKD6BYbgAV8Cw6zrPCnxyLhjhGuCdK/I168TV8DzcgxADAI5KHHXw/eo5jhEM8i/p5FgGlHBwjHOQcQkTIwUeYkWc4FlVzrDDuB/gscawwzrGocsQ58nRI4IcG0HaORXyg4J5GEMezKHXRwAHgcY5BhmCD855GqvCzggrvdMITHItMiw3PT5toxc8MXsuHEJ53ixEs0AvLAjZAO2wudfZB6ddlkJnxASgUSpBKpaKK93/hT09UBgQ/5ETppA8bdI7Bd6V6SEpKmoKeqcTERGg5aQb25jCtkW1+wd/uv/0Ux6JBopZiBCgqKPYKPldqlRp+amim6QXeryUWr/OkDzFWHSGCn6m6Y000JvR08A4hgvQldc3WD3J5MrWB5OQU+MvmIDQgjA850QpyA67tAVHySp3RJ2jaJhlU7H0Leo0bwVqaArIZ1wxVh8l7gREOEsHjTRbep5Amzsne4QH9/ruJUJMvh77DCpg0qQDaptVyKAVkMtd9H+fuppnM/XjTuKABvKukWSVUSpUIk/6ODHQaOfxh9ISeq+MHXEMuLXU71YrEsUL0wsPHtSUmTupudV/A3oTrKBRKKgNDLMpfuAdYdCJUBqRSKZUBnkVNC/eA68ODOOmxkl2zDOgyVoM+80UP4LnluI7xwA66IcSg3xc2QLlVnmxcC0eK5FNg+szVUOHFwNxyXGey6VXKOYAGCQzQfaSgjm8B2pTUQwhMSkC/ldJO4rtBN4A1cXYntYGJc7toxz+pAfqvrTtdBmoDd7pr/TBAMoQoJzHWsN0Jk+YtxPD43mE7Q2+AZBLTLqNujV5uB2hTExhQw6jNTJ2fJ15GKV9ks0zYfgFoTfExcVNg1GbxFx54Fu0jMCDEBPAAAMNygIY1AKc2uMxgNb/pKjMsDwQeBhlhHdFmjmMFu98GqiQ+5W9ejhVuEp/m4a0rTXL71WH4NN0ECWuMIJSHzQsvlIWBLLIWPt/ZDuzfo3QmGOErInjaDxpL3Q3Ys/EMrF9RAWvDy6BDEz+vgQt5ceI9G14wwh6FFc7U3yBt/bucXQgnNiCaYFGlr6T/OMaguuAifBjXJkoZ+aMIlxFdAPf0yzzgcdl76/LFeza/0jBVr2Z/j5jLd+ujcglt3LLfetLXR71ROw2PlR1rgtiVVSJgVowGLhVGwVhZmKiewpfFMnwt/vlqyIkzzapbXXjRR+sjzu9zU3xW6S1p6/fXZgG4lRV9CuJXVoug3oThs9a3eK1rOnp9PhNbJIEEPqucmRBPvk+SLF4h3D3xdlQ9vL6qBl6L0Il6Y1UNbIqqF6/NV2+33OI5sRmkkwTlzwsWnXQnNf9wfV6IQGWpm57UHINOA8BjkiAe7rbixLq8zkUzoN/b5YZvCdrh7pxD3krttvOLZkCbel4cNkFreW9xQtdX/NnmcxPBht+nPjtR/43tS0kooqPxSnh5Xmd3boI5YPBcqRl0mq7OX+suPysJdZhqr0bWFHW3a1TW+7TgGrX1vqGo23r66JWXJA878CarsdyWWqvtaS7J6XBo0y4IGqX1wUcJZsDSqNof4LKS7A6HQdvzc5Oub+t/4m/WpVgKyf8//gUxUq9JX6lnfAAAAABJRU5ErkJggg==" />
                        {showDropdown && (
                            <div className="logout-dropdown" style={{marginLeft:"75px"}}>
                                <button onClick={handleLogout}>Logout</button>

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashboardTopHeader