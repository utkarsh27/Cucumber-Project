package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:/carriar/carriar/Test/CucumberProject/src/main/java/Features/NewCrmLogin.feature"
		,glue= {"StepDefinitions"},
		dryRun=false,
		format= {"pretty","html:test-output"},
		strict=true,
		monochrome=true
		
)






public class NewTestRunner {
	
	
}
