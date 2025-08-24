import Image from "next/image";
import Dashboard from "@/components/Dashboard/Dashboard";
import styles from "./page.module.css";

export default function Home() {
  return (
     <div>
        <h1> Listes des oracles </h1>
          <main >
           <Dashboard />
          </main>
          <footer >
          
          </footer>
        </div>
  );
}
