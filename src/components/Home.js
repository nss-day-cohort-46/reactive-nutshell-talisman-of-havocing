import { ArticleList } from "./article/ArticleList";
import { EventList } from "./events/EventList"
import { TaskProvider } from './tasks/TaskProvider'
import { TaskList } from './tasks/TaskList'
import { EventProvider } from "./events/EventProvider"
import { ArticleProvider } from "./article/ArticleProvider";
import './Home.css'

export const Home = () => {

    return (
        <>
            <TaskProvider>
                <EventProvider>
                    <ArticleProvider>
                        <h1>Facebook Lite</h1>
                        <section className="Home">
                            <div className="mainBodyHome">
                                <ArticleList />
                                <EventList />
                            </div>
                            <TaskList />
                        </section>
                    </ArticleProvider>
                </EventProvider>
            </TaskProvider>
        </>
    )
}
