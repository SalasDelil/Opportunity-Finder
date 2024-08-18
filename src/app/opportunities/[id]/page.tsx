"use client";

import React from "react";
import { useGetOpportunityByIdQuery } from "@/redux/services/customApi";
import LoadingSpinner from "@/app/features/LoadingSpinner";
import JobDescription from "@/app/features/JobDescription";
import Sidebar from "@/app/features/About";
import Navbar from "@/app/features/Navbar";
import NotFound from "@/app/features/NotFound";

interface AboutType {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

const OpportunityDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data, error, isLoading } = useGetOpportunityByIdQuery(id);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data?.success) {
    return <NotFound />;
  }

  const jobData = data.data;
  const about: AboutType = {
    posted_on: jobData.datePosted,
    deadline: jobData.deadline,
    location: jobData.location[0],
    start_date: jobData.startDate,
    end_date: jobData.endDate,
    categories: jobData.categories,
    required_skills: jobData.requiredSkills,
  };

  return (
    <Navbar>
      <div className="mx-auto w-10/12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <JobDescription
              title={jobData.title}
              description={jobData.description}
              responsibilities={jobData.responsibilities}
              candidate={jobData.idealCandidate}
              whenWhere={jobData.whenAndWhere}
            />
          </div>
          <div className="my-2">
            <Sidebar about={about} />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default OpportunityDetailPage;
