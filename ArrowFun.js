jobs = [
	{id : 1, designation: 'tester',    isActive: true},
	{id : 2, designation: 'developer', isActive: true},
	{id : 3, designation: 'architect', isActive: false}
];
 
const activeJobs1 = jobs.filter(function(job) { return job.isActive; });
// Above is the ECMA Script5 syntax.
 
//And below is the ES6 Syntax
const activeJobs = jobs.filter( job => job.isActive );