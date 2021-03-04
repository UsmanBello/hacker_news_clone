import { Switch, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout/AppLayout"
import TopStories from "./TopStories/TopStories";
import NewStories from "./NewStories/NewStories";
import OtherRoutes from "./OtherRoutes/OtherRoutes";






const Main = ()=>{


  return (  
   <AppLayout>
     
        <Switch>

            <Route
            exact
            path="/"
            render={(props) =>
                <TopStories/>
            }
            />
             <Route
            exact
            path="/new-stories"
            render={(props) =>
                <NewStories/>
            }
            />
             <Route
            exact
            path="/uncreated-routes"
            render={(props) =>
                <OtherRoutes/>
            }
            />
            
        </Switch>

      </AppLayout>
  );
};

export default Main;