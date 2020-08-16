package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "E:/carriar/carriar/Test/CucumberProject/src/main/java/Features/Login.feature"
	,glue={"StepDefinitions"},
	dryRun=true,
	format={"pretty","html:test-output"},
	monochrome=true,
	strict=true
)


public class TestRunner {
	
	

}
