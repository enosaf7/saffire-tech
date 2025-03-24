
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChartBar, 
  Database, 
  Table, 
  Search, 
  Code, 
  SlidersHorizontal, 
  BarChart, 
  PieChart, 
  Sigma, 
  FileSpreadsheet, 
  ArrowRight 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DataAnalysis = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="section-heading mb-6">Data Analysis Services</h1>
          <p className="section-subheading mx-auto">
            Leveraging my mathematical background to help you make sense of your data
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-6 text-sapphire-800">Turn Your Data Into Insights</h2>
              <p className="text-muted-foreground mb-4">
                As a Mathematical Science student, I understand the challenges of working with complex data.
                Whether you're struggling with statistical analysis, data visualization, or need help
                presenting your findings, I can help you transform raw data into meaningful insights.
              </p>
              <p className="text-muted-foreground mb-6">
                My data analysis services are tailored specifically for students who need help with:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Research projects and academic papers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Course assignments and homework</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Final year projects and theses</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Presentations and data visualization</span>
                </li>
              </ul>
              <Button asChild className="btn-hover bg-sapphire-600 hover:bg-sapphire-700">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            
            <div className="animate-fade-in-left grid grid-cols-2 gap-4">
              <div className="bg-sapphire-50 p-6 rounded-lg border border-sapphire-100 flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 text-sapphire-600 mb-4" />
                <h3 className="font-semibold text-sapphire-800">Statistical Analysis</h3>
              </div>
              <div className="bg-sapphire-50 p-6 rounded-lg border border-sapphire-100 flex flex-col items-center text-center">
                <PieChart className="h-12 w-12 text-sapphire-600 mb-4" />
                <h3 className="font-semibold text-sapphire-800">Data Visualization</h3>
              </div>
              <div className="bg-sapphire-50 p-6 rounded-lg border border-sapphire-100 flex flex-col items-center text-center">
                <Sigma className="h-12 w-12 text-sapphire-600 mb-4" />
                <h3 className="font-semibold text-sapphire-800">Mathematical Modeling</h3>
              </div>
              <div className="bg-sapphire-50 p-6 rounded-lg border border-sapphire-100 flex flex-col items-center text-center">
                <FileSpreadsheet className="h-12 w-12 text-sapphire-600 mb-4" />
                <h3 className="font-semibold text-sapphire-800">Data Management</h3>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="section-heading sapphire-heading">Analysis Services</h2>
              <p className="section-subheading mx-auto">
                Comprehensive data analysis solutions for academic success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Statistical Analysis",
                  description: "Comprehensive statistical tests and analysis for research projects and academic papers.",
                  icon: <ChartBar className="h-8 w-8 text-sapphire-600" />,
                  features: [
                    "Hypothesis testing",
                    "Regression analysis",
                    "ANOVA",
                    "Correlation analysis",
                    "Descriptive statistics",
                    "Probability distributions"
                  ]
                },
                {
                  title: "Data Visualization",
                  description: "Transform complex data into clear, compelling visuals that tell your story effectively.",
                  icon: <BarChart className="h-8 w-8 text-sapphire-600" />,
                  features: [
                    "Custom charts and graphs",
                    "Interactive visualizations",
                    "Presentation-ready figures",
                    "Infographics",
                    "Dashboard creation",
                    "Color-coded data representations"
                  ]
                },
                {
                  title: "Research Support",
                  description: "Assistance with research methodology, data collection, and analysis for academic projects.",
                  icon: <Search className="h-8 w-8 text-sapphire-600" />,
                  features: [
                    "Research design",
                    "Survey analysis",
                    "Literature review support",
                    "Methodology consulting",
                    "Results interpretation",
                    "Research paper formatting"
                  ]
                },
                {
                  title: "Data Management",
                  description: "Organize, clean, and prepare your data for analysis and presentation.",
                  icon: <Database className="h-8 w-8 text-sapphire-600" />,
                  features: [
                    "Data cleaning",
                    "Missing data handling",
                    "Data transformation",
                    "Dataset merging",
                    "Data extraction",
                    "Database querying"
                  ]
                },
                {
                  title: "Mathematical Modeling",
                  description: "Create mathematical models to solve complex problems and make predictions.",
                  icon: <Code className="h-8 w-8 text-sapphire-600" />,
                  features: [
                    "Predictive modeling",
                    "Simulation",
                    "Optimization",
                    "Differential equations",
                    "Linear programming",
                    "Algorithm development"
                  ]
                },
                {
                  title: "Software Training",
                  description: "Learn how to use SPSS, Excel, MATLAB, and other data analysis tools effectively.",
                  icon: <SlidersHorizontal className="h-8 w-8 text-sapphire-600" />,
                  features: [
                    "SPSS tutorials",
                    "Excel data analysis",
                    "MATLAB training",
                    "R programming basics",
                    "Python for data science",
                    "Software selection guidance"
                  ]
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-8 shadow-md border border-sapphire-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-sapphire-800">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-sapphire-300 rounded-full mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full group border-sapphire-200 text-sapphire-700 hover:bg-sapphire-50">
                    <Link to="/contact" className="flex items-center justify-center">
                      Request This Service <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Software & Tools */}
          <div>
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="section-heading sapphire-heading">Software & Tools</h2>
              <p className="section-subheading mx-auto">
                I'm proficient with the following data analysis tools and software
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { name: "SPSS", logo: "📊" },
                { name: "MATLAB", logo: "🧮" },
                { name: "Microsoft Excel", logo: "📈" },
                { name: "Minitab", logo: "📉" },
                { name: "R", logo: "📊" },
                { name: "Python", logo: "🐍" },
                { name: "Tableau", logo: "📊" },
                { name: "Power BI", logo: "📈" },
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-secondary p-6 rounded-lg flex flex-col items-center justify-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-4xl mb-2">{tool.logo}</div>
                  <div className="font-medium">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading sapphire-heading">My Data Analysis Process</h2>
            <p className="section-subheading mx-auto">
              A structured approach to handling your data needs
            </p>
          </div>
          
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-sapphire-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We'll discuss your project goals, data sources, and specific requirements to understand exactly what you need."
                },
                {
                  step: "02",
                  title: "Data Assessment",
                  description: "I'll evaluate your data to identify any issues like missing values, outliers, or formatting problems that need addressing."
                },
                {
                  step: "03",
                  title: "Analysis Planning",
                  description: "Based on your goals, I'll develop a detailed plan outlining the statistical methods and visualization approaches to use."
                },
                {
                  step: "04",
                  title: "Data Processing & Analysis",
                  description: "I'll clean, transform, and analyze your data using appropriate statistical methods and tools."
                },
                {
                  step: "05",
                  title: "Results Visualization",
                  description: "Your results will be presented in clear, informative visuals and tables that highlight key insights."
                },
                {
                  step: "06",
                  title: "Final Delivery & Review",
                  description: "I'll deliver comprehensive results and walk you through the findings, ensuring you understand the implications."
                },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`md:flex items-center animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="text-sm text-sapphire-600 font-medium mb-1">STEP {step.step}</div>
                    <h3 className="text-xl font-bold mb-2 text-sapphire-800">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  <div className="md:w-1/2 relative">
                    {/* Circle marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-sapphire-500 z-10 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sapphire-800">Ready to make sense of your data?</h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 text-muted-foreground">
            Let's transform your raw data into clear insights that will help your academic projects succeed.
          </p>
          <Button asChild size="lg" className="btn-hover bg-sapphire-600 hover:bg-sapphire-700 shadow-lg">
            <Link to="/contact">Book a Data Analysis Service</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default DataAnalysis;
