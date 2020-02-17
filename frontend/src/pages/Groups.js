import React from "react";
import Layout from "../components/layout";
import { Button } from "../components/actions/Button";

export const Groups = () => {
  return (
    <div>
      <Layout>
        <div>
          <section className="section">
            <div className="container has-text-centered">
              <h1 className="title groups-title">Study Groups</h1>
              <Button title="Create a Study Group" />
              <p className="group-description">
                Get the opportunity to create your own study group and others
                can join as well!
              </p>
            </div>
          </section>
          <section className="section">
            <div className="container has-text-centered">
              <Button title="Find Study Groups" />
              <p className="group-description">
                Discover study groups and join if you would like.
              </p>
            </div>
          </section>
          <footer class="footer">
            <div class="content has-text-centered">
              <p className="group-description">Powered by DSC Rutgers Newark</p>
              <p className="group-description">Add Us On <a href="https://dscrutgers.slack.com/" target="_blank">Slack!</a></p>
              
            </div>
          </footer>
        </div>
      </Layout>
    </div>
  );
};
